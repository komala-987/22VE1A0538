import { useState } from "react";
import { v4 as uuid } from "uuid";
import { logEvent } from "../utils/logger";

export default function ShortenerForm({ onShorten }) {
  const [urls, setUrls] = useState([""]);

  const handleInputChange = (index, value) => {
    const updated = [...urls];
    updated[index] = value;
    setUrls(updated);
  };

  const handleSubmit = () => {
    const shortened = urls.map((url) => {
      if (!url || !url.startsWith("http")) {
        logEvent("Validation Error", { url });
        return null;
      }
      const code = uuid().slice(0, 6);
      const expiry = Date.now() + 30 * 60000;
      logEvent("Shorten URL", { original: url, shortcode: code });
      return {
        original: url,
        shortcode: code,
        expiry,
      };
    }).filter(Boolean);

    onShorten(shortened);
  };

  return (
    <div>
      {urls.map((url, idx) => (
        <input
          key={idx}
          type="text"
          value={url}
          placeholder="Enter long URL"
          onChange={(e) => handleInputChange(idx, e.target.value)}
        />
      ))}
      {urls.length < 5 && <button onClick={() => setUrls([...urls, ""])}>+ Add URL</button>}
      <button onClick={handleSubmit}>Shorten</button>
    </div>
  );
}

