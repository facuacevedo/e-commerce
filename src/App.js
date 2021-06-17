import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";

function App() {
  const mensaje = "ESTE ES EL CONTENEDOR DE GREETING";
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={mensaje} />
    </div>
  );
}

export default App;
