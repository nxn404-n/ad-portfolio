import PropTypes from "prop-types";
import { FaCode } from "react-icons/fa6";
import { MdOutlinePreview } from "react-icons/md";

const Project = ({
  img,
  name,
  descHeading,
  descMain1,
  descMain2,
  descMain3,
  builtWith,
  sourceCode,
  liveLink,
}) => {
  return (
    <div className="lg:pr-20">
      <h4 className="pb-3 font-dm-serif text-2xl">{name}</h4>
      <div className="flex h-[1000px] flex-col rounded-xl bg-[#1B2430] justify-between">
        <div>
          <img
            src={img}
            alt={`${name} project image`}
            className="w-full rounded-t-xl"
          />
          <div className="flex flex-col gap-6 px-3 pt-5">
            <p className="text-lg font-semibold md:text-xl">{descHeading}</p>
            <p>{descMain1}</p>
            <p>{descMain2}</p>
            <p>{descMain3}</p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="px-3">
            <p>Built With:</p>
            <hr />
            <div className="flex flex-wrap gap-3 pt-3">
              {builtWith.map((language, index) => (
                <div key={index} className="rounded-md bg-[#131922] px-2 py-1">
                  {language}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 flex justify-between rounded-b-xl bg-[#131922] px-9 py-3">
            <a href={sourceCode} target="_blank" className="card-view">
              <FaCode />
              <p className="card-view-txt">view code</p>
            </a>
            <div className="h-[4rem] w-0.5 bg-amber-400"></div>
            <a href={liveLink} target="_blank" className="card-view">
              <MdOutlinePreview />
              <p className="card-view-txt">view live</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
Project.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  descHeading: PropTypes.string,
  descMain1: PropTypes.string,
  descMain2: PropTypes.string,
  descMain3: PropTypes.string,
  builtWith: PropTypes.arrayOf(PropTypes.string).isRequired,
  sourceCode: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};

export default Project;
