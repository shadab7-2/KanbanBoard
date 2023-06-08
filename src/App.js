import "./App.css";
import Home from "./Conponents/Home/Home";
import { RecoilRoot } from "recoil";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    
      <RecoilRoot>
        <div className="App">
          <Home />
        </div>
      </RecoilRoot>
    
  );
}

export default App;
