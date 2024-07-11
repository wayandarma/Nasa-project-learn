export default function SideBar({ showModal, setShowModal, apiData }) {
  return (
    <div className={`sidebar ${showModal ? "show" : "hide"}`}>
      <div
        className="bgOverlay"
        onClick={() => setShowModal((prev) => !prev)}
      ></div>
      <div className="sidebarContents">
        <h2>{apiData?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{apiData?.date}</p>
          <p>{apiData?.explanation}</p>
        </div>
        <button onClick={() => setShowModal((prev) => !prev)}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
