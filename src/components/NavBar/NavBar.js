import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget.js';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return(
        <div className="navegacion">
            <div className="contenedor">
                <Link to="/">
                    <h1>Proyecto<span>React</span></h1>
                </Link>
                <ul className="categories">
                    <NavLink to="/category/remeras" >
                        <li>Comidas</li>
                    </NavLink>
                    <NavLink to="/category/sweater">
                        <li>Bebidas</li>
                    </NavLink>
                    <NavLink to="/category/camisas">
                        <li>Postres</li>
                    </NavLink>
                    <NavLink to="/cart">
                        <li>{CartWidget}</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}
//en navlink le agrego los "parametros"
