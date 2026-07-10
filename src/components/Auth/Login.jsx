import React, { useState } from "react";

export default function Login({ handleLogin, error }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localError, setLocalError] = useState("");

  console.log("Login component rendered"); // Debug log

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted"); // Debug log
    setLocalError("");

    if (!email || !password) {
      setLocalError("Please fill all fields");
      return;
    }

    // ✅ Check if handleLogin is a function
    if (typeof handleLogin !== 'function') {
      console.error("handleLogin is not a function in Login component!");
      setLocalError("System error. Please try again.");
      return;
    }

    console.log("Calling handleLogin with:", email, password); // Debug log
    const result = handleLogin(email, password);
    console.log("Result from handleLogin:", result); // Debug log

    if (result !== "admin" && result !== "employee") {
      setLocalError("Invalid email or password");
    }

    // Clear inputs (only if login failed or we want to clear anyway)
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#1C1C1C]">
      <div className="border-2 border-gray-500 p-8 rounded-lg bg-[#2A2A2A] w-96">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Employee Management
        </h2>

        <form onSubmit={submitHandler} className="flex flex-col">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-500 rounded-md p-3 m-2 bg-transparent text-white focus:border-emerald-500 outline-none"
          />

          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-gray-500 rounded-md p-3 m-2 bg-transparent text-white focus:border-emerald-500 outline-none"
          />

          {(localError || error) && (
            <p className="text-red-400 text-sm text-center mt-2">
              {localError || error}
            </p>
          )}

          <button
            type="submit"
            className="border rounded-md p-3 m-2 bg-emerald-500 text-white hover:bg-emerald-600 transition font-semibold"
          >
            Log In
          </button>

          <p className="text-gray-400 text-xs text-center mt-4">
            Demo: admin@example.com / 123
          </p>
        </form>
      </div>
    </div>
  );
}