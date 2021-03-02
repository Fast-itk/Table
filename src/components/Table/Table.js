import React from 'react'
import cls from './Table.module.scss'

const Table = ({users, itemOnPage, activePage, sortUsers, reverse, filterUsers, filterValue}) => {

    let sortDescending = [cls.arrow]
    let sortAscending = [cls.arrow, cls.arrowActive]

    if (reverse) {
        if (sortDescending.length > 1) {
            sortDescending.pop()
        }
        sortAscending.push(cls.arrowActive)
    } else {
        if (sortAscending.length > 1) {
            sortAscending.pop()
        }
        sortDescending.push(cls.arrowActive)
    }

    const renderUser = (index, id, surName, firstName, middleName) => {
        return (
            <tr key={ index }>
                <td>{ id }</td>
                <td>{ surName }</td>
                <td>{ firstName }</td>
                <td>{ middleName }</td>
            </tr>
        )
    }


    const usersList = users.map((user, index) => {
        
        let start = null
        let end = null
        if (!reverse) {

            start = activePage === 1 ? 1 : ((activePage - 1) * itemOnPage) + 1
            end = activePage * itemOnPage 

            if (user.id >= start && user.id <= end) {
                return renderUser(index, user.id, user.surName, user.firstName, user.middleName)
            } else return null

        } else {

            let numberOfUsers = users.length

            start = activePage === 1 
            ? numberOfUsers 
            : numberOfUsers - ((activePage - 1) * itemOnPage) 

            end = activePage === 1 
            ? numberOfUsers - itemOnPage + 1 
            : numberOfUsers - (activePage * itemOnPage) + 1

            if (user.id <= start && user.id >= end) {
                return renderUser(index, user.id, user.surName, user.firstName, user.middleName)
            } else return null
        }
       
    })

    const filter = filterUsers.map((user, index) => {
        return renderUser(index, user.id, user.surName, user.firstName, user.middleName)
    })


    return (
        <table className={cls.Table}>
            <thead>
                <tr>
                    <th>ID 
                        {
                            filterValue === ''
                            ? <div className={cls.arrowsWrapper}>
                            <button 
                               className={sortAscending.join(' ')}
                               disabled={reverse}
                               onClick={() => sortUsers(true)}
                            >&#9650;</button> 

                            <button 
                               className={sortDescending.join(' ')}
                               onClick={() => sortUsers(false)}
                               disabled={!reverse}
                            >&#9660;</button> 
                            </div>
                            : null
                        }
                        
                    </th>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                </tr>
            </thead>
            <tbody>
                {
                    filterValue !== ''
                    ? filter
                    : usersList
                }
            </tbody>
        </table>

    )
}

export default Table