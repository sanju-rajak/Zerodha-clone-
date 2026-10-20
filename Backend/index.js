
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const crypto = require("crypto");

const { UserModel } = require("./models/UserModel");
const { HoldingsModel } = require("./models/HoldingModels");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

const PORT = process.env.PORT || 3001;
const url = process.env.MONGO_URL;

const app = express();

// =====================================
// MIDDLEWARE
// =====================================

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3002",
    ],
    credentials: true,
  })
);

app.use(express.json());

// =====================================
// TEMPORARY OTP AND SESSION STORAGE
// Local demo only
// =====================================

const otpStore = new Map();
const sessions = new Map();

const SESSION_DURATION = 24 * 60 * 60 * 1000;
const OTP_DURATION = 5 * 60 * 1000;

function isValidMobile(mobile) {
  return typeof mobile === "string" && /^[6-9]\d{9}$/.test(mobile);
}

function getSessionToken(req) {
  const cookieHeader = req.headers.cookie || "";

  const cookie = cookieHeader
    .split(";")
    .map((item) => item.trim())
    .find((item) => item.startsWith("sessionToken="));

  return cookie
    ? cookie.substring("sessionToken=".length)
    : null;
}

function setSessionCookie(res, token) {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";

  res.setHeader(
    "Set-Cookie",
    `sessionToken=${token}; HttpOnly; SameSite=Lax; Path=/; Max-Age=86400${secure}`
  );
}

function clearSessionCookie(res) {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";

  res.setHeader(
    "Set-Cookie",
    `sessionToken=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0${secure}`
  );
}

function createSession(mobile) {
  const token = crypto.randomBytes(32).toString("hex");

  sessions.set(token, {
    mobile,
    authenticated: false,
    expiresAt: Date.now() + SESSION_DURATION,
  });

  return token;
}

// A valid session must exist before signup/login can complete.
function requireVerifiedMobile(req, res, next) {
  const token = getSessionToken(req);
  const session = token ? sessions.get(token) : null;

  if (!session || session.expiresAt <= Date.now()) {
    if (token) sessions.delete(token);

    return res.status(401).json({
      message: "Please verify your OTP first.",
    });
  }

  req.sessionToken = token;
  req.session = session;
  next();
}

// Dashboard APIs require a completed signup/login after OTP verification.
function requireAuth(req, res, next) {
  const token = getSessionToken(req);
  const session = token ? sessions.get(token) : null;

  if (
    !session ||
    session.expiresAt <= Date.now() ||
    session.authenticated !== true
  ) {
    if (token) sessions.delete(token);

    clearSessionCookie(res);

    return res.status(401).json({
      authenticated: false,
      message: "Please verify your OTP and complete signup/login.",
    });
  }

  req.user = { mobile: session.mobile };
  req.sessionToken = token;
  req.session = session;

  next();
}

// =====================================
// GET ALL HOLDINGS
// =====================================

app.get("/allHoldings", requireAuth, async (req, res) => {
  try {
    const allHolding = await HoldingsModel.find({});

    return res.status(200).json(allHolding);
  } catch (err) {
    console.error("Error fetching holdings:", err);

    return res.status(500).json({
      message: "Error fetching holdings",
    });
  }
});

// =====================================
// GET ALL POSITIONS
// =====================================

app.get("/allPositions", requireAuth, async (req, res) => {
  try {
    const allPosition = await PositionsModel.find({});

    return res.status(200).json(allPosition);
  } catch (err) {
    console.error("Error fetching positions:", err);

    return res.status(500).json({
      message: "Error fetching positions",
    });
  }
});

// =====================================
// CREATE NEW ORDER
// =====================================

app.post("/newOrder", requireAuth, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    if (
      !name ||
      qty === undefined ||
      price === undefined ||
      !mode
    ) {
      return res.status(400).json({
        message: "All order details are required",
      });
    }

    if (
      !Number.isFinite(Number(qty)) ||
      Number(qty) <= 0 ||
      !Number.isFinite(Number(price)) ||
      Number(price) <= 0 ||
      !["BUY", "SELL"].includes(String(mode).toUpperCase())
    ) {
      return res.status(400).json({
        message: "Invalid order details",
      });
    }

    const newOrder = new OrdersModel({
      name,
      qty: Number(qty),
      price: Number(price),
      mode: String(mode).toUpperCase(),
    });

    await newOrder.save();

    return res.status(201).json({
      message: "Order saved successfully!",
      order: newOrder,
    });
  } catch (err) {
    console.error("Error saving order:", err);

    return res.status(500).json({
      message: "Error saving order",
    });
  }
});

// =====================================
// SEND OTP
// =====================================

app.post("/send-otp", async (req, res) => {
  try {
    const { mobile } = req.body;

    if (!isValidMobile(mobile)) {
      return res.status(400).json({
        message: "Enter a valid 10-digit mobile number",
      });
    }

    // Demo OTP works only in local development.
    if (
      process.env.NODE_ENV !== "production" &&
      process.env.DEV_OTP === "true"
    ) {
      const otp = crypto.randomInt(100000, 1000000).toString();

      otpStore.set(mobile, {
        otp,
        expiresAt: Date.now() + OTP_DURATION,
      });

      console.log(`[DEV ONLY] OTP for ${mobile}: ${otp}`);

      return res.status(200).json({
        message: "Testing OTP generated. Check backend terminal.",
      });
    }

    // Real SMS provider integration is not configured here.
    return res.status(501).json({
      message: "Real SMS OTP is not configured yet. Use local demo mode for testing.",
    });
  } catch (error) {
    console.error("Send OTP error:", error);

    return res.status(500).json({
      message: "Failed to generate OTP",
    });
  }
});

// =====================================
// VERIFY OTP
// =====================================

app.post("/verify-otp", async (req, res) => {
  try {
    const { mobile, otp } = req.body;

    if (
      !isValidMobile(mobile) ||
      typeof otp !== "string" && typeof otp !== "number"
    ) {
      return res.status(400).json({
        message: "Enter a valid mobile number and OTP",
      });
    }

    const enteredOTP = String(otp);

    if (!/^\d{6}$/.test(enteredOTP)) {
      return res.status(400).json({
        message: "OTP must contain 6 digits",
      });
    }

    const storedOTP = otpStore.get(mobile);

    if (!storedOTP) {
      return res.status(400).json({
        message: "OTP not found. Please request a new OTP.",
      });
    }

    if (Date.now() >= storedOTP.expiresAt) {
      otpStore.delete(mobile);

      return res.status(400).json({
        message: "OTP expired. Please request a new OTP.",
      });
    }

    if (storedOTP.otp !== enteredOTP) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    // OTP is valid. It can only be used once.
    otpStore.delete(mobile);

    // Create a pending session. Signup/login must finish before
    // dashboard APIs become available.
    const token = createSession(mobile);

    setSessionCookie(res, token);

    return res.status(200).json({
      message: "OTP verified successfully",
      verified: true,
    });
  } catch (error) {
    console.error("Verify OTP error:", error);

    return res.status(500).json({
      message: "Server error",
    });
  }
});

// =====================================
// SIGNUP
// =====================================

app.post("/signup", requireVerifiedMobile, async (req, res) => {
  try {
    const mobile = req.body.mobile;

    if (!isValidMobile(mobile)) {
      return res.status(400).json({
        message: "Enter a valid 10-digit mobile number",
      });
    }

    if (mobile !== req.session.mobile) {
      return res.status(403).json({
        message: "Verified mobile number does not match",
      });
    }

    const existingUser = await UserModel.findOne({ mobile });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists. Please login.",
      });
    }

    const newUser = new UserModel({ mobile });
    await newUser.save();

    // Mark session authenticated after successful signup.
    req.session.authenticated = true;

    return res.status(201).json({
      message: "Signup successful",
      user: {
        id: newUser._id,
        mobile: newUser.mobile,
      },
    });
  } catch (err) {
    console.error("Signup error:", err);

    return res.status(500).json({
      message: "Server error",
    });
  }
});

// =====================================
// LOGIN
// =====================================

app.post("/login", requireVerifiedMobile, async (req, res) => {
  try {
    const mobile = req.body.mobile;

    if (!isValidMobile(mobile)) {
      return res.status(400).json({
        message: "Enter a valid 10-digit mobile number",
      });
    }

    if (mobile !== req.session.mobile) {
      return res.status(403).json({
        message: "Verified mobile number does not match",
      });
    }

    const user = await UserModel.findOne({ mobile });

    if (!user) {
      return res.status(404).json({
        message: "User not found. Please signup first.",
      });
    }

    // Mark session authenticated after successful login.
    req.session.authenticated = true;

    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        mobile: user.mobile,
      },
    });
  } catch (err) {
    console.error("Login error:", err);

    return res.status(500).json({
      message: "Server error",
    });
  }
});

// =====================================
// CHECK AUTHENTICATION
// =====================================

app.get("/auth/me", requireAuth, (req, res) => {
  return res.status(200).json({
    authenticated: true,
    user: req.user,
  });
});

// =====================================
// LOGOUT
// =====================================

app.post("/auth/logout", (req, res) => {
  const token = getSessionToken(req);

  if (token) {
    sessions.delete(token);
  }

  clearSessionCookie(res);

  return res.status(200).json({
    message: "Logged out successfully",
  });
});

// =====================================
// TEST API
// =====================================

app.get("/", (req, res) => {
  return res.status(200).send("Zerodha Backend is running!");
});

// =====================================
// DATABASE + SERVER
// =====================================

if (!url) {
  console.error("MONGO_URL is missing from your .env file.");
  process.exit(1);
}

mongoose
  .connect(url)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });