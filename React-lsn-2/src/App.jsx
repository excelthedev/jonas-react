import Steps from "./Steps";

const App = () => {
  return (
    <div>
      {/* notice how each component manages it's own states and doesn't affect the toher even if both are thesame component */}
      <Steps />
      <Steps />
    </div>
  );
};

export default App;
