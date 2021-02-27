import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import cls from './Layout.module.scss'

const Layout = ({ children }) => {
    return (
        <div className={cls.Layout}>

            <Navbar />

            <main>
                { children }
            </main>

        </div>
    )
    
}

export default Layout