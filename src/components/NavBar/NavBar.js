import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return(
        <div className="navegacion">
            <div className="contenedor">
                <Link to="/">
                    <h1 className="logo">Saku's</h1>
                </Link>
                <ul className="categories">
                    <NavLink activeClassName="activeClass" className="links" to="/category/comidas" >
                        <li>Comidas</li>
                    </NavLink>
                    <NavLink activeClassName="activeClass" className="links" to="/category/bebidas">
                        <li>Bebidas</li>
                    </NavLink>
                    <NavLink activeClassName="activeClass" className="links" to="/category/postres">
                        <li>Postres</li>
                    </NavLink>
                    <NavLink activeClassName="activeClass" className="links" to="/cart" >
                        <CartWidget/>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}
//en navlink le agrego los "parametros"
