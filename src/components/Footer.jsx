import PropTypes from "prop-types";
export default function Footer({ setShowModal }) {
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>The Brutal Mars Landscape</h2>
        <h1>APOD PROJECT</h1>
      </div>
      <button onClick={() => setShowModal((prev) => !prev)}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}

Footer.propTypes = {
  setShowModal: PropTypes.func.isRequired,
};
