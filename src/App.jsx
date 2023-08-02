import "./App.css";

import ImagePage from "./components/Parent-L2_1";
import SubscriptionPage from "./components/SubscriptionPage";

function App() {
  return (
    <>
      <div className="sectionsContainer">
        <div className="section1">
          <ImagePage />
        </div>
        <br className="lineBreak" />
        <div className="section2">
          <SubscriptionPage />
        </div>
      </div>
    </>
  );
}

export default App;
