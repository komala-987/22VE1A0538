import { useEffect, useState } from "react";

export default function StatsPage() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("shortenedLinks") || "[]");
    setLinks(stored);
  }, []);

  return (
    <div>
      <h2>URL Shortener Stats</h2>
      {links.map((item, i) => (
        <div key={i}>
          <p>Original: {item.original}</p>
          <p>Short: {item.shortcode}</p>
          <p>Valid Until: {new Date(item.expiry).toLocaleTimeString()}</p>
        </div>
      ))}
    </div>
  );
}


