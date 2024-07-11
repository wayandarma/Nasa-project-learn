import PropTypes from "prop-types";

export default function SideBar({ showModal, setShowModal, apiData }) {
  return (
    <div className={`sidebar ${showModal ? "show" : "hide"}`}>
      <div
        className="bgOverlay"
        onClick={() => setShowModal((prev) => !prev)}
      ></div>
      <div className="sidebarContents">
        <h2>{apiData.title}</h2>
        <div>
          <p>Description</p>
          <p>{apiData.explanation}</p>
        </div>
        <button onClick={() => setShowModal((prev) => !prev)}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

SideBar.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  apiData: PropTypes.array,
};
