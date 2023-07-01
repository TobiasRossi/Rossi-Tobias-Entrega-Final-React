import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to={'/'} className="navbar-brand text-uppercase fs-3" href="#">
                    <img src="https://raw.githubusercontent.com/TobiasRossi/Proyecto-Final-Tobias-Rossi/main/images/llama.png" alt="Logo LLama" width="55" height="44" className="d-inline-block align-text-top"/>
                    La LLama Loca
                </Link>
                <ul className="lista">
                    <li className="listaLi">
                        <NavLink className="listaLink" to={'/categoria/1'}>Motherboards</NavLink>
                    </li>
                    <li className="listaLi">
                        <NavLink className="listaLink" to={'/categoria/2'}>Placas de Video</NavLink>
                    </li>
                    <li className="listaLi">
                        <NavLink className="listaLink" to={'/categoria/3'}>Procesadores</NavLink>
                    </li>
                    <li className="listaLi">
                        <NavLink className="listaLink" to={'/categoria/4'}>Fuentes</NavLink>
                    </li>
                </ul>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar