import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return(
        <div className="navegacion">
            <div className="contenedor">
                <NavLink activeClassName="activeClass" className="links" to="/" exact>
                    <h1 className="logo">Saku's</h1>
                </NavLink>
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
