import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NavBar from "./components/NavBar";
import FirstPage from "./components/FirstPage";
import AboutPage from "./components/AboutPage";
import Expect from "./components/Expect";
import Visionary from "./components/Visionary";
import Footer from "./components/Footer";
import Custom from "./components/Custom";
import Mail from "./components/Mail";
import Loader from "./components/Loader";

const App = () => {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) return <Loader onLoaded={() => setLoaded(true)} />;

  return (
    <>
      <Custom />
      <NavBar />
      <FirstPage />
      <AboutPage />
      <Expect />
      <Visionary />
      <Footer />
      <Mail />
    </>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
