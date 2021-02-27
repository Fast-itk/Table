import React from 'react'
import cls from './Filter.module.scss'

const Filter = () => {
    return (
        <div className={cls.Filter}> 
            <form method="GET">
                <input className={cls.filterInput} type="text" placeholder="Имя пользователя" />
                <select className={cls.filterSelect}>
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                </select>
            </form>
        </div>
    )
}

export default Filter