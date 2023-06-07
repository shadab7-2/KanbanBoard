
import './App.css';
import Home from './Conponents/Home/Home';
import { RecoilRoot } from 'recoil';

function App() {
  return (
   <RecoilRoot>
     <div className="App">
      <Home/>
    </div>
   </RecoilRoot>
  );
}

export default App;
