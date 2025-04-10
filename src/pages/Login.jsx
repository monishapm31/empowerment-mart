import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔐 Admin login (hardcoded)
    if (email === "admin@example.com" && password === "admin123") {
      localStorage.setItem("role", "admin");
      navigate("/admin");
      return;
    }

    // 👥 Fetch users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // 🔎 Find matching user
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("role", user.role);
      localStorage.setItem("email", user.email);
      localStorage.setItem("phone", user.phone);

      // 🌐 Redirect based on role
      if (user.role === "user") {
        navigate("/home");
      } else if (user.role === "seller") {
        navigate("/upload-product");
      } else {
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
          <button className="w-full bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700 transition">
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
