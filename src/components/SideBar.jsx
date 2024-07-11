import PropTypes from "prop-types";

export default function SideBar({ showModal, setShowModal }) {
  return (
    <div className={`sidebar ${showModal ? "show" : "hide"}`}>
      <div
        className="bgOverlay"
        onClick={() => setShowModal((prev) => !prev)}
      ></div>
      <div className="sidebarContents">
        <h2>The Brutal Mars Landscape</h2>
        <div>
          <p>Description</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptates, totam praesentium? Quisquam neque, nulla quam modi
            veritatis dolorum dolores nihil?
          </p>
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
};
