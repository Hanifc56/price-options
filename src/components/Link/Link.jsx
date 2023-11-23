import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <li className="md:mr-10 md:p-2 hover:bg-red-200 ">
      <a href={`route.path`}>{route.name}</a>
    </li>
  );
};
Link.propTypes = {
  route: PropTypes.object,
};
export default Link;
