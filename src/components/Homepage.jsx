import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import AllProjects from "./AllProjects";

const Homepage = () => {
  return (
    <div className="flex flex-col justify-center gap-7 pt-16 sm:mt-10 sm:items-center sm:pt-24">
      <div className="flex flex-col gap-7 sm:items-center">
        <h2 className="font-dm-serif text-4xl font-bold tracking-wide sm:text-6xl">
          Nafeur Rahman Adil
        </h2>
        <p className="font-dm-serif text-2xl sm:text-4xl">Web Developer</p>
      </div>

      <div className="mt-8 flex gap-4 self-center rounded-2xl bg-[#1B2430] p-5 text-6xl">
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

      <a href="https://docs.google.com/document/d/17huNFr8svQ2Aij6eGMJ2sS-UdODxz0518Gwt_0rfops/edit?usp=sharing" target="_blank" className="cursor-pointer self-center rounded-lg bg-[#1B2430] px-5 py-2 text-lg hover:bg-[#090D13] hover:text-[#E4AF26]">
        Get my résumé
      </a>

      <AllProjects />
    </div>
  );
};

export default Homepage;
