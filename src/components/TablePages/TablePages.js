import React from 'react'
import cls from './TablePages.module.scss'

const TablePages = () => {
    return (
        <div>
            <div className={cls.TablePages}>
                <div className={[cls.tableNav, cls.tableNavActive].join(' ')}>1</div>
                <div className={cls.tableNav}>2</div>
                <div className={cls.tableNav}>3</div>
            </div>
        </div>
    )
}

export default TablePages