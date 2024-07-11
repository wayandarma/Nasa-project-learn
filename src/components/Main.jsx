import marsImage from "../../public/mars.png";
export default function Main() {
  return (
    <div className="imgContainer">
      <img
        loading="lazy"
        src={marsImage}
        alt="mars image"
        className="bgImage"
      />
    </div>
  );
}
