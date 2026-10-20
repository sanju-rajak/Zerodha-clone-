import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
   const navigate = useNavigate();

    const [mobile, setMobile] = useState("");
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [message, setMessage] = useState("");
    // Get OTP - Demo Mode
    const handleGetOtp = () => {
        if (!/^\d{10}$/.test(mobile)) {
            setMessage("Please enter a valid 10-digit mobile number.");
            return;
        }

        setOtpSent(true);
        setOtp("");
        setMessage(
            "Demo mode: Enter any 6-digit number to continue."
        );
    };

    // Verify OTP - Demo Mode Only
    const handleVerifyOtp = () => {
    if (!/^\d{10}$/.test(mobile)) {
        setMessage("Please enter a valid 10-digit mobile number.");
        return;
    }

    if (!/^\d{6}$/.test(otp)) {
        setMessage("Please enter any 6-digit OTP.");
        return;
    }

    setMessage("Demo login successful! Opening dashboard...");

    // Open the separate Dashboard React app
    window.location.href = "http://localhost:3000/";
};

    return (
        <div
            style={{
                width: "100%",
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "80px 20px",
                color: "#424242",
                boxSizing: "border-box",
            }}
        >
            {/* TOP HEADING */}
            <div
                style={{
                    textAlign: "center",
                    marginBottom: "70px",
                }}
            >
                <h1
                    style={{
                        fontSize: "32px",
                        fontWeight: "500",
                        marginBottom: "20px",
                    }}
                >
                    Open a free demat and trading account online
                </h1>

                <p
                    style={{
                        fontSize: "18px",
                        color: "#666",
                        margin: 0,
                    }}
                >
                    Start investing brokerage free and join a community of
                    1.8+ crore investors and traders
                </p>
            </div>

            {/* SIGNUP MAIN SECTION */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "80px",
                    marginBottom: "100px",
                }}
            >
                {/* LEFT IMAGE */}
                <div
                    style={{
                        width: "55%",
                    }}
                >
                    <img
                        src="/media/images/account_open.svg"
                        alt="open account"
                        style={{
                            width: "100%",
                            maxWidth: "550px",
                        }}
                    />
                </div>

                {/* RIGHT SIGNUP */}
                <div
                    style={{
                        width: "430px",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "32px",
                            fontWeight: "500",
                            margin: "0 0 10px",
                        }}
                    >
                        Signup now
                    </h2>

                    <p
                        style={{
                            fontSize: "18px",
                            color: "#888",
                            marginBottom: "25px",
                        }}
                    >
                        Or track your existing application
                    </p>

                    {/* MOBILE NUMBER */}
                    <div
                        style={{
                            display: "flex",
                            width: "430px",
                            height: "62px",
                            border: "1px solid #ccc",
                            boxSizing: "border-box",
                        }}
                    >
                        <div
                            style={{
                                width: "95px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRight: "1px solid #ccc",
                                fontSize: "17px",
                            }}
                        >
                            +91
                        </div>

                        <input
                            type="tel"
                            placeholder="Enter your mobile number"
                            value={mobile}
                            onChange={(e) => {
                                const value = e.target.value.replace(
                                    /\D/g,
                                    ""
                                );

                                if (value.length <= 10) {
                                    setMobile(value);
                                    setMessage("");
                                }
                            }}
                            maxLength="10"
                            style={{
                                flex: 1,
                                border: "none",
                                outline: "none",
                                padding: "0 16px",
                                fontSize: "17px",
                            }}
                        />
                    </div>

                    {/* GET OTP BUTTON */}
                    {!otpSent && (
                        <button
                            type="button"
                            onClick={handleGetOtp}
                            style={{
                                width: "280px",
                                height: "58px",
                                marginTop: "32px",
                                backgroundColor: "#387ed1",
                                color: "white",
                                border: "none",
                                borderRadius: "4px",
                                fontSize: "20px",
                                cursor: "pointer",
                            }}
                        >
                            Get OTP
                        </button>
                    )}

                    {/* OTP SECTION */}
                    {otpSent && (
                        <div
                            style={{
                                marginTop: "25px",
                            }}
                        >
                            <input
                                type="text"
                                inputMode="numeric"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => {
                                    const value = e.target.value.replace(
                                        /\D/g,
                                        ""
                                    );

                                    if (value.length <= 6) {
                                        setOtp(value);
                                        setMessage("");
                                    }
                                }}
                                maxLength="6"
                                style={{
                                    width: "280px",
                                    height: "58px",
                                    border: "1px solid #ccc",
                                    outline: "none",
                                    padding: "0 16px",
                                    fontSize: "18px",
                                    boxSizing: "border-box",
                                }}
                            />

                            <button
                                type="button"
                                onClick={handleVerifyOtp}
                                style={{
                                    display: "block",
                                    width: "280px",
                                    height: "58px",
                                    marginTop: "15px",
                                    backgroundColor: "#387ed1",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "4px",
                                    fontSize: "20px",
                                    cursor: "pointer",
                                }}
                            >
                                Verify OTP
                            </button>
                        </div>
                    )}

                    {/* MESSAGE */}
                    {message && (
                        <p
                            style={{
                                marginTop: "15px",
                                color:
                                    message.toLowerCase().includes("successful") ||
                                    message.toLowerCase().includes("continue")
                                        ? "green"
                                        : "#d9534f",
                                fontSize: "14px",
                            }}
                        >
                            {message}
                        </p>
                    )}

                    {/* TERMS */}
                    <p
                        style={{
                            fontSize: "14px",
                            color: "#555",
                            marginTop: "35px",
                            lineHeight: "1.6",
                        }}
                    >
                        By proceeding, you agree to the Zerodha{" "}
                        <span style={{ color: "#387ed1" }}>terms</span>{" "}
                        &{" "}
                        <span style={{ color: "#387ed1" }}>
                            privacy policy
                        </span>
                    </p>

                    {/* NRI */}
                    <p
                        style={{
                            fontSize: "14px",
                            color: "#555",
                            paddingBottom: "25px",
                            borderBottom: "1px solid #eee",
                        }}
                    >
                        Looking to open NRI account?{" "}
                        <span style={{ color: "#387ed1" }}>
                            Click here
                        </span>
                    </p>
                </div>
            </div>

            {/* EXISTING ACCOUNT */}
            <div
                style={{
                    textAlign: "center",
                    marginBottom: "80px",
                }}
            >
                <h2
                    style={{
                        fontSize: "28px",
                        fontWeight: "500",
                    }}
                >
                    Already have a demat account?
                </h2>

                <p
                    style={{
                        fontSize: "17px",
                        color: "#666",
                    }}
                >
                    Move your holdings to Zerodha and we'll cover your
                    transfer costs, up to ₹500,{" "}
                    <span style={{ color: "#387ed1" }}>
                        learn more.
                    </span>
                </p>
            </div>

            {/* PRODUCTS */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "70px 100px",
                    maxWidth: "950px",
                    margin: "0 auto",
                }}
            >
                {/* STOCKS */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "30px",
                    }}
                >
                    <img
                        src="/media/images/stocks-acop.svg"
                        alt="Stocks"
                        style={{
                            width: "120px",
                            height: "100px",
                            objectFit: "contain",
                        }}
                    />

                    <div>
                        <h2
                            style={{
                                fontSize: "22px",
                                fontWeight: "500",
                                margin: "0 0 15px",
                            }}
                        >
                            Stocks
                        </h2>

                        <p
                            style={{
                                fontSize: "17px",
                                lineHeight: "1.7",
                                color: "#666",
                                margin: 0,
                            }}
                        >
                            Invest in all exchange-listed securities
                        </p>
                    </div>
                </div>

                {/* MUTUAL FUNDS */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "30px",
                    }}
                >
                    <img
                        src="/media/images/mf-acop.svg"
                        alt="Mutual funds"
                        style={{
                            width: "120px",
                            height: "100px",
                            objectFit: "contain",
                        }}
                    />

                    <div>
                        <h2
                            style={{
                                fontSize: "22px",
                                fontWeight: "500",
                                margin: "0 0 15px",
                            }}
                        >
                            Mutual funds
                        </h2>

                        <p
                            style={{
                                fontSize: "17px",
                                lineHeight: "1.7",
                                color: "#666",
                                margin: 0,
                            }}
                        >
                            Invest in commission-free direct mutual funds
                        </p>
                    </div>
                </div>

                {/* IPO */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "30px",
                    }}
                >
                    <img
                        src="/media/images/ipo-acop.svg"
                        alt="IPO"
                        style={{
                            width: "120px",
                            height: "100px",
                            objectFit: "contain",
                        }}
                    />

                    <div>
                        <h2
                            style={{
                                fontSize: "22px",
                                fontWeight: "500",
                                margin: "0 0 15px",
                            }}
                        >
                            IPO
                        </h2>

                        <p
                            style={{
                                fontSize: "17px",
                                lineHeight: "1.7",
                                color: "#666",
                                margin: 0,
                            }}
                        >
                            Apply to the latest IPOs instantly via UPI
                        </p>
                    </div>
                </div>

                {/* FUTURES & OPTIONS */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "30px",
                    }}
                >
                    <img
                        src="/media/images/fo-acop.svg"
                        alt="Futures and options"
                        style={{
                            width: "120px",
                            height: "100px",
                            objectFit: "contain",
                        }}
                    />

                    <div>
                        <h2
                            style={{
                                fontSize: "22px",
                                fontWeight: "500",
                                margin: "0 0 15px",
                            }}
                        >
                            Futures &amp; options
                        </h2>

                        <p
                            style={{
                                fontSize: "17px",
                                lineHeight: "1.7",
                                color: "#666",
                                margin: 0,
                            }}
                        >
                            Hedge and mitigate market risk through
                            simplified F&amp;O trading
                        </p>
                    </div>
                </div>
            </div>

            {/* EXPLORE INVESTMENTS */}
            <div
                style={{
                    textAlign: "center",
                    marginTop: "75px",
                }}
            >
                <button
                    type="button"
                    style={{
                        width: "265px",
                        height: "58px",
                        backgroundColor: "#387ed1",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        fontSize: "18px",
                        cursor: "pointer",
                    }}
                >
                    Explore Investments
                </button>
            </div>

            {/* STEPS HEADING */}
            <div
                style={{
                    marginTop: "120px",
                    padding: "55px 20px",
                    backgroundColor: "#fafafa",
                    textAlign: "center",
                }}
            >
                <h2
                    style={{
                        fontSize: "28px",
                        fontWeight: "500",
                    }}
                >
                    Steps to open a demat account with Zerodha
                </h2>
            </div>

            {/* STEPS */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "80px",
                    marginTop: "50px",
                }}
            >
                <div
                    style={{
                        width: "50%",
                    }}
                >
                    <img
                        src="/media/images/steps-acop.svg"
                        alt="Steps to open account"
                        style={{
                            width: "100%",
                            maxWidth: "500px",
                        }}
                    />
                </div>

                <div
                    style={{
                        width: "50%",
                    }}
                >
                    <ol
                        style={{
                            fontSize: "18px",
                            lineHeight: "2",
                            color: "#555",
                        }}
                    >
                        <li>Enter the requested details</li>
                        <hr />

                        <li>Complete e-sign &amp; verification</li>
                        <hr />

                        <li>Start investing!</li>
                        <hr />
                    </ol>
                </div>
            </div>

            {/* BENEFITS */}
            <div
                style={{
                    display: "flex",
                    gap: "80px",
                    alignItems: "center",
                    marginTop: "100px",
                }}
            >
                <div
                    style={{
                        width: "45%",
                    }}
                >
                    <img
                        src="/media/images/acop-benefits.svg"
                        alt="Benefits of opening account"
                        style={{
                            width: "400px",
                            height: "300px",
                            objectFit: "contain",
                        }}
                    />

                    <h3
                        style={{
                            fontSize: "25px",
                            fontWeight: "500",
                        }}
                    >
                        Benefits of opening a Zerodha demat account
                    </h3>
                </div>

                <div
                    style={{
                        width: "55%",
                    }}
                >
                    <h3>Unbeatable pricing</h3>

                    <p>
                        Zero charges for equity &amp; mutual fund investments.
                        Flat ₹20 fees for intraday and F&amp;O trades.
                    </p>

                    <h3>Best investing experience</h3>

                    <p>
                        Simple and intuitive trading platform with an
                        easy-to-understand user interface.
                    </p>

                    <h3>No spam or gimmicks</h3>

                    <p>
                        Committed to transparency — no gimmicks, spam,
                        "gamification", or intrusive push notifications.
                    </p>

                    <h3>The Zerodha universe</h3>

                    <p>
                        More than just an app — gain free access to the entire
                        ecosystem of our partner products.
                    </p>
                </div>
            </div>

            {/* ACCOUNT TYPES */}
            <div
                style={{
                    maxWidth: "1000px",
                    margin: "100px auto 40px",
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "58px 46px",
                }}
            >
                {/* INDIVIDUAL ACCOUNT */}
                <div
                    style={{
                        minHeight: "180px",
                        border: "1px solid #387ed1",
                        borderRadius: "5px",
                        padding: "32px",
                        display: "flex",
                        gap: "18px",
                    }}
                >
                    <div
                        style={{
                            fontSize: "25px",
                        }}
                    >
                        👤
                    </div>

                    <div>
                        <h3
                            style={{
                                margin: "2px 0 25px",
                                fontSize: "21px",
                                fontWeight: "500",
                            }}
                        >
                            Individual Account
                        </h3>

                        <p
                            style={{
                                margin: 0,
                                fontSize: "17px",
                                lineHeight: "1.8",
                                color: "#666",
                            }}
                        >
                            Invest in equity, mutual funds and derivatives
                        </p>
                    </div>
                </div>

                {/* HUF ACCOUNT */}
                <div
                    style={{
                        minHeight: "180px",
                        border: "1px solid #ddd",
                        borderRadius: "5px",
                        padding: "32px",
                        display: "flex",
                        gap: "18px",
                    }}
                >
                    <div style={{ fontSize: "25px" }}>👥</div>

                    <div>
                        <h3
                            style={{
                                margin: "2px 0 25px",
                                fontSize: "21px",
                            }}
                        >
                            HUF Account
                        </h3>

                        <p
                            style={{
                                margin: 0,
                                fontSize: "17px",
                                lineHeight: "1.8",
                            }}
                        >
                            Make tax-efficient investments for your family
                        </p>
                    </div>
                </div>

                {/* NRI ACCOUNT */}
                <div
                    style={{
                        minHeight: "180px",
                        border: "1px solid #ddd",
                        borderRadius: "5px",
                        padding: "32px",
                        display: "flex",
                        gap: "18px",
                    }}
                >
                    <div style={{ fontSize: "25px" }}>🌐</div>

                    <div>
                        <h3
                            style={{
                                margin: "2px 0 25px",
                                fontSize: "21px",
                            }}
                        >
                            NRI Account
                        </h3>

                        <p
                            style={{
                                margin: 0,
                                fontSize: "17px",
                                lineHeight: "1.8",
                            }}
                        >
                            Invest in equity, mutual funds, debentures, and
                            more
                        </p>
                    </div>
                </div>

                {/* MINOR ACCOUNT */}
                <div
                    style={{
                        minHeight: "200px",
                        border: "1px solid #ddd",
                        borderRadius: "5px",
                        padding: "32px",
                        display: "flex",
                        gap: "18px",
                    }}
                >
                    <div style={{ fontSize: "25px" }}>👶</div>

                    <div>
                        <h3
                            style={{
                                margin: "2px 0 25px",
                                fontSize: "21px",
                            }}
                        >
                            Minor Account
                        </h3>

                        <p
                            style={{
                                margin: 0,
                                fontSize: "17px",
                                lineHeight: "1.8",
                            }}
                        >
                            Teach your little ones about money &amp; invest for
                            their future with them
                        </p>
                    </div>
                </div>

                {/* CORPORATE */}
                <div
                    style={{
                        minHeight: "180px",
                        border: "1px solid #ddd",
                        borderRadius: "5px",
                        padding: "32px",
                        display: "flex",
                        gap: "18px",
                    }}
                >
                    <div style={{ fontSize: "25px" }}>🏢</div>

                    <div>
                        <h3
                            style={{
                                margin: "2px 0 25px",
                                fontSize: "21px",
                            }}
                        >
                            Corporate / LLP / Partnership
                        </h3>

                        <p
                            style={{
                                margin: 0,
                                fontSize: "17px",
                                lineHeight: "1.8",
                            }}
                        >
                            Manage your business surplus and investments easily
                        </p>
                    </div>
                </div>
            </div>

            {/* FAQs */}
            <div
                style={{
                    maxWidth: "1000px",
                    margin: "60px auto 150px",
                }}
            >
                <h2
                    style={{
                        fontSize: "28px",
                        fontWeight: "500",
                        marginBottom: "70px",
                        color: "#424242",
                    }}
                >
                    FAQs
                </h2>

                {[
                    "What is a Zerodha account?",
                    "What documents are required to open a demat account?",
                    "Is Zerodha account opening free?",
                    "Are there any AMC (Account Maintenance Charges) for a demat account?",
                    "Can I open a demat account without a bank account?",
                    "What is a Basic Services Demat Account (BSDA)?",
                    "Can I open a demat and trading account using the mobile app?",
                ].map((question, index) => (
                    <div
                        key={index}
                        style={{
                            position: "relative",
                            minHeight: "76px",
                            borderTop: "1px solid #e6e6e6",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: "-1px",
                                left: 0,
                                width: "100px",
                                height: "4px",
                                backgroundColor: "#387ed1",
                            }}
                        />

                        <span
                            style={{
                                fontSize: "17px",
                                color: "#424242",
                            }}
                        >
                            {question}
                        </span>

                        <span
                            style={{
                                fontSize: "18px",
                            }}
                        >
                            ⌄
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Signup;