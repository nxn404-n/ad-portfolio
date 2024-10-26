import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className=' bg-[#103D42] h-full text-[#FFEDD5]'>
      <App />
    </div>
  </StrictMode>
);
