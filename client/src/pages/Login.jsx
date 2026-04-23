import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      alert("Login successful");

      navigate("/dashboard"); // ✅ smooth navigation
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        color: "white",
      }}
    >
      <div
        style={{
          background: "#111",
          padding: "30px",
          borderRadius: "10px",
          width: "300px",
          textAlign: "center",
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
        }}
      >
        <h2>SmartBill Lite</h2>

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
            border: "none",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
            border: "none",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "10px",
            background: "#4CAF50",
            border: "none",
            color: "white",
            cursor: "pointer",
            borderRadius: "5px",
            marginTop: "10px",
          }}
        >
          Login
        </button>

        <p
          style={{
            marginTop: "15px",
            cursor: "pointer",
            color: "#00c6ff",
          }}
          onClick={() => navigate("/signup")}
        >
          Don't have an account? Signup
        </p>
      </div>
    </div>
  );
}