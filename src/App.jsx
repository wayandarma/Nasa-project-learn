import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  // API KEY
  const apiKey = import.meta.env.VITE_API_KEY;

  // STATE
  const [showModal, setShowModal] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchApiData = async () => {
      const url = "https://api.nasa.gov/planetary/apod" + `?api_key=${apiKey}`;
      try {
        setLoading(true);
        const response = await axios.get(url);
        setApiData(response.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchApiData();
  }, []);
  return (
    <>
      {showModal && (
        <SideBar setShowModal={setShowModal} showModal={showModal} />
      )}
      <Main />
      <Footer setShowModal={setShowModal} />
    </>
  );
}
