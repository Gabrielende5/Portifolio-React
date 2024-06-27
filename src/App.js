import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Rotas} from "./Rotas"
import { RouterProvider } from 'react-router-dom';
function App() {
  return (
    <div>
      <RouterProvider router={Rotas}></RouterProvider>
      <div></div>
    </div>
  );
}

export default App;