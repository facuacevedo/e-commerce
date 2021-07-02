import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import{ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import {NotFound} from './components/NotFound/NotFound';

export const App = () => {
  /* const mensaje = "ESTE ES EL CONTENEDOR DE GREETING"; */
return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" component={ItemListContainer} exact/>
          <Route path="/category/:id" component={ItemListContainer} exact/>
          <Route path="/item/:id" component={ItemDetailContainer} exact/>
          <Route path="*/*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

/* {<NavBar />
          <ItemListContainer greeting={mensaje} />
          <ItemCount initial="1" stock="10"/>
          <ItemDetailContainer />} */