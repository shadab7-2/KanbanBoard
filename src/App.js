
import './App.css';
import DialogBox from './Conponents/Dialog/DialogBox';
import Home from './Conponents/Home/Home';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element= {<Home/>}/>
          <Route path = "/task/id" element= {<DialogBox/>}/>
        </Routes>
      </Router>
      {/* <DialogBox/> */}
     
    
    </div>
  );
}

export default App;
