export default function ShortenedLinks({ data }) {
  return (
    <div>
      <h3>Shortened URLs</h3>
      {data.map((item, idx) => (
        <div key={idx}>
          <p>Original: {item.original}</p>
          <p>Short: <a href={`http://localhost:3000/${item.shortcode}`}>{item.shortcode}</a></p>
          <p>Valid Until: {new Date(item.expiry).toLocaleTimeString()}</p>
        </div>
      ))}
    </div>
  );
}
