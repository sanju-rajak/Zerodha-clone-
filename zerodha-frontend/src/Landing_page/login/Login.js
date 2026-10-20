import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (!/^\d{10}$/.test(mobile)) {
            setMessage("Enter a valid 10-digit mobile number.");
            return;
        }

        if (!password.trim()) {
            setMessage("Please enter your password.");
            return;
        }

        // Demo only: real backend authentication is not implemented.
        setMessage("Login successful! Opening dashboard...");

        window.location.href = "http://localhost:3000/";
    };

    return (
        <div
            style={{
                minHeight: "75vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "30px 15px",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "400px",
                    padding: "30px",
                    border: "1px solid #e5e5e5",
                    borderRadius: "8px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
                }}
            >
                <h2 style={{ textAlign: "center" }}>
                    Login to Zerodha
                </h2>

                <p
                    style={{
                        textAlign: "center",
                        color: "#666",
                    }}
                >
                    Access your trading dashboard
                </p>

                <form onSubmit={handleLogin}>
                    <label>Mobile Number</label>

                    <input
                        type="tel"
                        value={mobile}
                        onChange={(e) =>
                            setMobile(
                                e.target.value
                                    .replace(/\D/g, "")
                                    .slice(0, 10)
                            )
                        }
                        placeholder="Enter mobile number"
                        maxLength={10}
                        required
                        style={inputStyle}
                    />

                    <label>Password</label>

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                        style={inputStyle}
                    />

                    {message && (
                        <p style={{ color: "#d9534f" }}>
                            {message}
                        </p>
                    )}

                    <button type="submit" style={buttonStyle}>
                        Login
                    </button>
                </form>

                <p style={{ textAlign: "center", marginTop: "20px" }}>
                    Don't have an account?{" "}
                    <Link to="/signup" style={{ color: "#387ed1" }}>
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}

const inputStyle = {
    display: "block",
    width: "100%",
    padding: "12px",
    margin: "8px 0 18px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
};

const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#387ed1",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
};

export default Login;