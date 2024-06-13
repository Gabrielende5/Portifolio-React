import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import {Banner} from "./components/Banner";
import {Cards} from "./components/Cards/Cards"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Cards/>
      
    </div>
  );
}

export default App;