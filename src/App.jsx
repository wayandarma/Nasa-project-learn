import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  // STATE
  const [showModal, setShowModal] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchApiData = async () => {
      // API KEY
      const apiKey = import.meta.env.VITE_NASA_API_KEY;
      const url = "https://api.nasa.gov/planetary/apod" + `?api_key=${apiKey}`;

      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;

      if (localStorage.getItem(localKey)) {
        const pastData = JSON.parse(localStorage.getItem(localKey));
        console.log("fetch From local Storage");
        return setApiData(pastData);
      }
      try {
        setLoading(true);
        const response = await axios.get(url);
        setApiData(response.data);
        localStorage.setItem(localKey, JSON.stringify(response.data));
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchApiData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      ) : (
        <>{apiData ? <Main apiData={apiData} /> : <h1>{error}</h1>}</>
      )}
      {showModal && (
        <SideBar
          setShowModal={setShowModal}
          showModal={showModal}
          apiData={apiData}
        />
      )}
      <Footer setShowModal={setShowModal} apiData={apiData} />
    </>
  );
}
