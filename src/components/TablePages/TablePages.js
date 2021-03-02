import React from 'react'
import {NavLink} from 'react-router-dom'
import cls from './TablePages.module.scss'

const TablePages = ({ pages, filterValue }) => {

    const PagesList = pages.map((page, index) => {
        return (
            <NavLink 
                activeClassName={cls.tableNavActive} 
                to={`/${page}`} 
                key={index} 
                className={cls.tableNav}
            >{ page }</NavLink>
        )
    })
    
    return (
        <div>
            <div className={cls.TablePages}>
                { 
                    filterValue === ''
                    ? PagesList
                    : null
                }
            </div>
        </div>
    )
}

export default TablePages