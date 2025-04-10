import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedPassword = password;

    if (!trimmedEmail || !trimmedPassword) {
      setError("Please enter both email and password.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedEmail)) {
      setError("Invalid email format.");
      return;
    }

    // 🔐 Admin login (hardcoded)
    if (trimmedEmail === "admin@example.com" && trimmedPassword === "admin123") {
      localStorage.setItem("role", "admin");
      navigate("/admin");
      return;
    }

    // 👥 Fetch users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // 🔍 Match user credentials
    const user = users.find(
      (u) => u.email === trimmedEmail && u.password === trimmedPassword
    );

    if (user) {
      localStorage.setItem("role", user.role);
      localStorage.setItem("email", user.email);
      localStorage.setItem("phone", user.phone);

      // 🔁 Redirect based on role
      switch (user.role) {
        case "user":
          navigate("/home");
          break;
        case "seller":
          navigate("/upload-product");
          break;
        default:
          navigate("/");
      }
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/i4.jpg')" }}
    >
      <div className="bg-amber bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-black text-center mb-6">Welcome Back!</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="w-full">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-amber bg-opacity-30 border border-gray-700 rounded-lg mb-4 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-green bg-opacity-30 border border-gray-700 rounded-lg mb-4 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-black text-center">
          Don't have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => navigate("/signup")}
          >
            Signup
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
