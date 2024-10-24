import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

function Homepage() {
  return (
    <div className=' flex flex-col justify-center items-center mt-10 gap-7'>
      <h2>Nafeur Rahman Adil</h2>

      <div className='flex gap-4 text-5xl'>
        <div className="contact-btn">
          <FaGithub />
          <p className="text-sm">Github</p>
        </div>
        <div className="contact-btn">
          <FaLinkedin />
          <p className="text-sm">Linkedin</p>
        </div>
        <div className="contact-btn">
          <RiTwitterXFill />
          <p className="text-sm">X</p>
        </div>
      </div>

      <div>Get my résumé</div>
    </div>
  );
}

export default Homepage;
