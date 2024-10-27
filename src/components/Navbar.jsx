import PropTypes from 'prop-types';

const Navbar = ({ setShowHomepage, setShowProjects, setShowContacts }) => {
  function handleHomepage() {
    setShowHomepage(true);
    setShowProjects(false);
    setShowContacts(false);
  }
  function handleProjects() {
    setShowProjects(true);
    setShowHomepage(false);
    setShowContacts(false);
  }
  function handleContact() {
    setShowContacts(true);
    setShowHomepage(false);
    setShowProjects(false);
  }
  return (
    <div className="flex justify-between">
      <h1>adil</h1>
      <div className="flex gap-5">
        <p onClick={handleHomepage}>home</p>
        <p onClick={handleProjects}>projects</p>
        <p onClick={handleContact}>contact</p>
      </div>
    </div>
  )
};
Navbar.propTypes = {
  setShowHomepage: PropTypes.func.isRequired,
  setShowProjects: PropTypes.func.isRequired,
  setShowContacts: PropTypes.func.isRequired,
};

export default Navbar;