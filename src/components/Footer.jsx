export default function Footer({ setShowModal, apiData }) {
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>APOD PROJECT</h1>
        <h2>{apiData?.title}</h2>
      </div>
      <button onClick={() => setShowModal((prev) => !prev)}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
