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
  liveLink
}) => {
  return (
    <div>
      <h4>{name}</h4>
      <div>
        <img
          src={img}
          alt={`${name} project image`}
          className='max-h-96 max-w-96'
        />
        <p>{descHeading}</p>
        <p>{descMain1}</p>
        <p>{descMain2}</p>
        <p>{descMain3}</p>

        <div>
          <p>Built With:</p>
          <hr />
          {builtWith.map((language, index) => (
            <div key={index}>
              {language}
            </div>
          ))}
        </div>

        <div>
          <a href={sourceCode} target="_blank">
            <FaCode />
            <p>view code</p>
          </a>
          <a href={liveLink} target="_blank">
            <MdOutlinePreview />
            <p>view live</p>
          </a>
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
