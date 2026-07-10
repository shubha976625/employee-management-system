// ==========================================
// src/main.jsx
// React Application चा Entry Point
// ==========================================

// StrictMode Import
// Development मध्ये चुका (Warnings) शोधण्यासाठी वापरतात.
import { StrictMode } from "react";

// React DOM मधील createRoot Import
// React App Browser मध्ये Render करण्यासाठी.
import { createRoot } from "react-dom/client";

// Global CSS File
import "./index.css";

// Main App Component
import App from "./App.jsx";

// Context Provider
// संपूर्ण App ला Data उपलब्ध करून देतो.
import Authprovider from "./context/Authprovider.jsx";

// ==========================================
// React Application Start
// ==========================================

// HTML मधील id="root" Element शोधतो
createRoot(

  document.getElementById("root")

).render(

  // ========================================
  // StrictMode
  // Development मध्ये Error शोधण्यासाठी
  // ========================================
  <StrictMode>

    {/* =====================================
        AuthProvider
        App मधील सर्व Components ना
        Context Data उपलब्ध करून देतो.
    ====================================== */}
    <Authprovider>

      {/* Main Component */}
      <App />

    </Authprovider>

  </StrictMode>

);