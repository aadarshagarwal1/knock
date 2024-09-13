export default function loadHandler() {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ marginTop: "3rem" }}
    >
      <div
        className="spinner-border"
        role="status"
        style={{ height: "3rem", width: "3rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
