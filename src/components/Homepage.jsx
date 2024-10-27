import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import AllProjects from "./AllProjects";

const Homepage = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-7 pt-24">
      <h2 className="font-dm-serif text-6xl font-bold tracking-wide">
        Nafeur Rahman Adil
      </h2>
      <p className="font-dm-serif text-4xl">Web Developer</p>

      <div className="mt-8 flex gap-4 rounded-2xl bg-[#1B2430] p-5 text-6xl">
        <a
          className="contact-btn"
          href="https://github.com/nxn404-n"
          target="_blank"
        >
          <FaGithub />
          <p className="text-sm">Github</p>
        </a>
        <a
          className="contact-btn"
          href="https://www.linkedin.com/in/nafeurrahmanadil/"
          target="_blank"
        >
          <FaLinkedin />
          <p className="text-sm">Linkedin</p>
        </a>
        <a className="contact-btn" href="https://x.com/nxn_404" target="_blank">
          <RiTwitterXFill />
          <p className="text-sm">X</p>
        </a>
        <a className="contact-btn" href="mailto:nafeurrahmanadil@gmail.com">
          <SiGmail />
          <p className="text-sm">Email</p>
        </a>
      </div>

      <p className="cursor-pointer rounded-lg bg-[#1B2430] px-5 py-2 text-lg hover:text-[#E4AF26]">
        Get my résumé
      </p>

      <AllProjects />
    </div>
  );
};

export default Homepage;
