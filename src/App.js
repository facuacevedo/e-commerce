import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {ItemCount} from "./components/ItemListContainer/ItemCount";
import{ItemDetailContainer} from './components/ItemListContainer/ItemDetailContainer/ItemDetailContainer';

function App() {
  const mensaje = "ESTE ES EL CONTENEDOR DE GREETING";

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={mensaje} />
      <ItemCount initial="1" stock="10"/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
