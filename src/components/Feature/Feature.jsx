import PropTypes from "prop-types";
import { FaRegCircleCheck } from "react-icons/fa6";
const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center ">
        <span className="text-green-400 pr-2">
          <FaRegCircleCheck />
        </span>{" "}
        {feature}
      </p>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.string,
};
export default Feature;
