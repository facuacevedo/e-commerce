import './NavBar.css';
import {CartWidget} from '../CartWidget/CartWidget.js';

export const NavBar = () => {
    return(
        <div className="navegacion">
            <div className="contenedor">
                <h1>Proyecto<span>React</span></h1>
                <ul>
                    <li>Inicio</li>
                    <li>Producto</li>
                    <li>Carrito</li>
                    <li>Nosotros</li>
                    <li><CartWidget /></li>
                </ul>
            </div>
        </div>
    )
}