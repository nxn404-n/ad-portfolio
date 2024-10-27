import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";

const Contacts = () => {
  return (
    <div className="flex flex-col items-start gap-4 text-3xl">
      <a
        className="contact-contactPage"
        href="https://github.com/nxn404-n"
        target="_blank"
      >
        <FaGithub />
        <p className="text-lg">Github</p>
      </a>
      <a
        className="contact-contactPage"
        href="https://www.linkedin.com/in/nafeurrahmanadil/"
        target="_blank"
      >
        <FaLinkedin />
        <p className="text-lg">Linkedin</p>
      </a>
      <a
        className="contact-contactPage"
        href="https://x.com/nxn_404"
        target="_blank"
      >
        <RiTwitterXFill />
        <p className="text-lg">X</p>
      </a>
      <a
        className="contact-contactPage"
        href="mailto:nafeurrahmanadil@gmail.com"
      >
        <SiGmail />
        <p className="text-lg">Email</p>
      </a>
    </div>
  );
};

export default Contacts;
