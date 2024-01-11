/**
 * very simple test child control used for testing rendering
 *
 * This just displays a color swatch panel with some text and 3 color blocks.
 *
 * @returns
 */
const TestColorSwatch: React.FC = () => {
  /********************************************/
  /* Template                                 */
  /********************************************/
  return (
    <div
      id="sample-child-control"
      style={{ backgroundColor: "#FAF0FF", border: "solid 2px #222", borderRadius: 8, padding: 8, width: 300 }}
    >
      <div style={{ fontFamily: "Courier New", fontSize: 18, padding: 8, textAlign: "center" }}>SAMPLE CHILD CONTROL</div>
      <div style={{ fontFamily: "arial", fontSize: 14, fontWeight: 400 }}>Style:Danger</div>
      <div style={{ width: 300, height: 50, display: "flex" }}>
        <div style={{ background: "#FEE1BB", flexGrow: 1 }} />
        <div style={{ background: "#FE9129", flexGrow: 1 }} />
        <div style={{ background: "#E78124", flexGrow: 1 }} />
      </div>
    </div>
  );
};

export default TestColorSwatch;
