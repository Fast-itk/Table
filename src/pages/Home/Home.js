import React, { useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import Filter from '../../components/Filter/Filter'
import Table from '../../components/Table/Table'
import TablePages from '../../components/TablePages/TablePages'
import { UsersContext } from '../../context/users/UsersContext'
import cls from './Home.module.scss'

const Home = ({ match }) => {

    const {
        generateUsers, setNumberItem, setCountPages, 
        users, itemOnPage, pages, sortUsers, reverse, 
        onFilterUsers, filterUsers, filterValue
    } = useContext(UsersContext)

    const activePage= +match.params.id

    useEffect(() => {
        generateUsers(90) 
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        setCountPages()
    // eslint-disable-next-line
    }, [users, itemOnPage])

    return (
        <div className={cls.Home}>
            <h2>Таблица пользователей</h2>
            <div>
                {activePage > pages.length ? <Redirect to="/1" /> 
                : <>
                    <Filter 
                        setNumberItem={setNumberItem} 
                        itemOnPage={itemOnPage} 
                        onFilterUsers={onFilterUsers}
                        filterValue={filterValue}
                    />

                    <Table 
                        users={users} 
                        itemOnPage={itemOnPage} 
                        activePage={activePage} 
                        sortUsers={sortUsers}
                        reverse={reverse}
                        filterUsers={filterUsers}
                        filterValue={filterValue}
                    />

                    <TablePages 
                        pages={pages}
                        filterValue={filterValue}
                    />
                  </>
                
                }
                
            </div>
        </div>
    )
}

export default Home