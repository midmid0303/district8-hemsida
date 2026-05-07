export default function DragonOverlay() {
  return (
    <div className="dragon-overlay">
      <img
        src="/logo.png"
        alt=""
        style={{ width: "100%", filter: "grayscale(1) invert(1) brightness(2)" }}
      />
    </div>
  );
}
