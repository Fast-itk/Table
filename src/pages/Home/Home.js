import React from 'react'
import Filter from '../../components/Filter/Filter'
import Table from '../../components/Table/Table'
import TablePages from '../../components/TablePages/TablePages'
import cls from './Home.module.scss'

const Home = ({ match }) => {
    // { match.params.id }
    return (
        <div className={cls.Home}>
            <h2>Таблица пользователей</h2>
            <div>
                <Filter />
                <Table />
                <TablePages />
            </div>
        </div>
    )
}

export default Home