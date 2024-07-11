import marsImage from "../../public/mars.png";
export default function Main({ apiData }) {
  console.log("from main", apiData);
  return (
    <div className="imgContainer">
      <img
        loading="lazy"
        src={apiData?.url || marsImage}
        alt={apiData?.title || "Mars Image"}
        className="bgImage"
      />
    </div>
  );
}
