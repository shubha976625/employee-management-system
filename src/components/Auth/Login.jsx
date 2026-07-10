// React मधून useState Hook import केला आहे.
// useState चा उपयोग component मध्ये state तयार करण्यासाठी होतो.
import React, { useState } from "react";

// Login Component
// handleLogin आणि error हे App Component कडून props म्हणून येतात.
export default function Login({ handleLogin, error }) {

  // Email साठवण्यासाठी state
  const [email, setEmail] = useState("");

  // Password साठवण्यासाठी state
  const [password, setPassword] = useState("");

  // Component च्या आत local error दाखवण्यासाठी state
  const [localError, setLocalError] = useState("");

  // प्रत्येक वेळी component render झाला की console मध्ये message दिसेल.
  console.log("Login component rendered");

  // Form submit झाल्यावर हा function execute होतो.
  const submitHandler = (e) => {

    // Form submit झाल्यावर page refresh होऊ नये म्हणून.
    e.preventDefault();

    console.log("Form submitted");

    // आधीचा error remove करतो.
    setLocalError("");

    // Email किंवा Password रिकामा असेल तर.
    if (!email || !password) {
      setLocalError("Please fill all fields");
      return; // Function इथेच थांबेल.
    }

    // handleLogin function आले आहे का ते check करतो.
    // जर handleLogin function नसेल तर error दाखवेल.
    if (typeof handleLogin !== "function") {
      console.error("handleLogin is not a function in Login component!");
      setLocalError("System error. Please try again.");
      return;
    }

    // Email आणि Password console मध्ये print करतो.
    console.log("Calling handleLogin with:", email, password);

    // App Component मधील handleLogin function call करतो.
    const result = handleLogin(email, password);

    // handleLogin ने काय return केले ते print करतो.
    console.log("Result from handleLogin:", result);

    // जर login successful नसेल तर error दाखवतो.
    if (result !== "admin" && result !== "employee") {
      setLocalError("Invalid email or password");
    }

    // Login झाल्यावर input fields रिकामे करतो.
    setEmail("");
    setPassword("");
  };

  // JSX (UI)
  return (

    // पूर्ण screen cover करणारा container
    <div className="flex h-screen w-screen items-center justify-center bg-[#1C1C1C]">

      {/* Login Box */}
      <div className="border-2 border-gray-500 p-8 rounded-lg bg-[#2A2A2A] w-96">

        {/* Heading */}
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Employee Management
        </h2>

        {/* Form */}
        <form onSubmit={submitHandler} className="flex flex-col">

          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter Your Email"

            // Input ची value email state मध्ये ठेवली आहे.
            value={email}

            // User काही लिहिल्यावर email state update होते.
            onChange={(e) => setEmail(e.target.value)}

            required

            className="border border-gray-500 rounded-md p-3 m-2 bg-transparent text-white focus:border-emerald-500 outline-none"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Enter Your Password"

            // Password state bind केली आहे.
            value={password}

            // User password लिहिताच state update होईल.
            onChange={(e) => setPassword(e.target.value)}

            required

            className="border border-gray-500 rounded-md p-3 m-2 bg-transparent text-white focus:border-emerald-500 outline-none"
          />

          {/* जर localError किंवा App कडून आलेला error असेल तर तो दाखवतो */}
          {(localError || error) && (
            <p className="text-red-400 text-sm text-center mt-2">
              {localError || error}
            </p>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="border rounded-md p-3 m-2 bg-emerald-500 text-white hover:bg-emerald-600 transition font-semibold"
          >
            Log In
          </button>

          {/* Demo Login Details */}
          <p className="text-gray-400 text-xs text-center mt-4">
            Demo: admin@example.com / 123
          </p>

        </form>

      </div>

    </div>
  );
}