import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar/NavBar";
import {Banner} from "./components/Banner/Banner";
import {Cards} from "./components/Cards/Cards"
import {Why} from "./components/Why/Why"
import { Conhecimento } from './components/Conhecimento/Conhecimento';
import {Contato } from "./components/Contato/Contato"
function App() {
  return (
    <div className="home">
      <div>
        <NavBar/>
      </div>
      <div>
        <Banner/>
      </div>
      <div>
        <Cards/>
      </div>
      <div>
        <Why/>
      </div>
      <div>
        <Conhecimento/>
      </div>
      <div className='teste2'>
        <Contato></Contato>
      </div>
    </div>  
  );
}

export default App;