import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

const Homepage = () => {
  return (
    <div className=' flex flex-col justify-center items-center mt-10 gap-7'>
      <h2>Nafeur Rahman Adil</h2>

      <div className='flex gap-4 text-5xl'>
        <a className="contact-btn" href="https://github.com/nxn404-n" target="_blank">
          <FaGithub />
          <p className="text-sm">Github</p>
        </a>
        <a className="contact-btn" href="https://www.linkedin.com/in/nafeurrahmanadil/" target="_blank">
          <FaLinkedin />
          <p className="text-sm">Linkedin</p>
        </a>
        <a className="contact-btn" href="https://x.com/nxn_404" target="_blank">
          <RiTwitterXFill />
          <p className="text-sm">X</p>
        </a>
      </div>

      <div>Get my résumé</div>
    </div>
  );
}

export default Homepage;
