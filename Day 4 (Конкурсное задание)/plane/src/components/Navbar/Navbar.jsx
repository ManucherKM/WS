import React, { useState } from 'react'
import svg from "../../assets/img/logo.svg"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [burgerClick, setBurgerClick] = useState(false);
    const borgerClass = burgerClick ? "burger hidden md:block active  outline-none" : "burger hidden md:block  outline-none"

    const [menuMobileVis, setMenuModileVis] = useState(false);
    const menuMobile = menuMobileVis ? "pb-2 container" : "hidden pb-2 container"


    function burgerUpdate() {
        setBurgerClick(!burgerClick);
        setMenuModileVis(!menuMobileVis)
    }
    return (
        <nav className="bg-blue">
            <div className="container flex justify-between items-center py-5 relative" >
                <div className="w-10">
                    <Link to="/">
                        <img src={svg} alt="Logo" />
                    </Link>
                </div>
                <ul className="flex gap-5 md:hidden">
                    <li>
                        <Link to="/login" className="px-2 py-2 text-white rounded-lg border outline-none">Вход</Link>
                    </li>
                    <li>
                        <Link to="/register" className="px-2 py-2 bg-white rounded-lg outline-none">Регистрация</Link>
                    </li>
                </ul>

                <button onClick={burgerUpdate} className={borgerClass}>
                    <span className="burger-line top-line"></span>
                    <span className="burger-line mid-line"></span>
                    <span className="burger-line bottom-line"></span>
                </button>

            </div>
            <div className={menuMobile}>
                <ul className="flex flex-col">
                    <li className="flex flex-col text-center mb-2">
                        <Link to="/login" className="px-2 py-2 text-white rounded-lg border">Войти</Link>
                    </li>
                    <li className="flex flex-col text-center">
                        <Link to="/register" className="px-2 py-2 bg-white rounded-lg">Регистрация</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar