import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShortenerForm from "./components/ShortenerForm";
import ShortenedLinks from "./components/ShortenedLinks";
import StatsPage from "./components/StatsPage";

export default function App() {
  const [shortened, setShortened] = useState([]);

  const handleShorten = (data) => {
    setShortened(data);
    localStorage.setItem("shortenedLinks", JSON.stringify(data));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <ShortenerForm onShorten={handleShorten} />
            <ShortenedLinks data={shortened} />
          </>
        } />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="*" element={<p>404 - Not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}
