import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import AllProjects from "./components/AllProjects";
import { useState } from "react";
import Contacts from "./components/Contacts";

function App() {
  const [showHomepage, setShowHomepage] = useState(true);
  const [showProjects, setShowProjects] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  return (
    <div className='p-3 flex flex-col '>
      <Navbar
        setShowHomepage={setShowHomepage}
        setShowProjects={setShowProjects}
        setShowContacts={setShowContacts}
      />
      {showHomepage && <Homepage />}
      {showProjects && <AllProjects />}
      {showContacts && <Contacts />}
    </div>
  );
}

export default App;
