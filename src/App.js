import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar/NavBar";
import {Banner} from "./components/Banner/Banner";
import {Cards} from "./components/Cards/Cards"
import {Why} from "./components/Why/Why"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Cards/>
      <Why/>
      
    </div>
  );
}

export default App;