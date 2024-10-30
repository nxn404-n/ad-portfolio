import PropTypes from "prop-types";
import { useState } from "react";

const Navbar = ({ setShowHomepage, setShowProjects, setShowContacts }) => {
  const [activePage, setActivePage] = useState("home");

  function handleHomepage() {
    setShowHomepage(true);
    setShowProjects(false);
    setShowContacts(false);
    setActivePage("home");
  }
  function handleProjects() {
    setShowProjects(true);
    setShowHomepage(false);
    setShowContacts(false);
    setActivePage("projects");
  }
  function handleContact() {
    setShowContacts(true);
    setShowHomepage(false);
    setShowProjects(false);
    setActivePage("contact");
  }
  return (
    <div className="flex justify-between">
      <h1 className="nav-btn font-dm-serif sm:text-4xl text-2xl font-bold">adil</h1>
      <div className="flex sm:gap-9 gap-3 font-montserrat text-lg">
        <p
          onClick={handleHomepage}
          className={`nav-btn ${activePage === "home" ? "text-[#E4AF26]" : ""}`}
        >
          home
        </p>
        <p
          onClick={handleProjects}
          className={`nav-btn ${activePage === "projects" ? "text-[#E4AF26]" : ""}`}
        >
          projects
        </p>
        <p
          onClick={handleContact}
          className={`nav-btn ${activePage === "contact" ? "text-[#E4AF26]" : ""}`}
        >
          contact
        </p>
      </div>
    </div>
  );
};
Navbar.propTypes = {
  setShowHomepage: PropTypes.func.isRequired,
  setShowProjects: PropTypes.func.isRequired,
  setShowContacts: PropTypes.func.isRequired,
};

export default Navbar;
