import React from 'react'
import { NavLink } from 'react-router-dom'
import cls from './Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={cls.Navbar}>
            <div className={cls.logo}>
                <h1>Table</h1>
            </div>
            <ul className={cls.list}>
                <NavLink 
                    className={cls.link} 
                    activeClassName={cls.activeLink}
                    to="/1"
                ><li>Главная</li></NavLink>
                <NavLink 
                    className={cls.link} 
                    activeClassName={cls.activeLink}
                    to="/about"
                ><li>Информация</li></NavLink>
            </ul>
        </nav>
    )
}

export default Navbar