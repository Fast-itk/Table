import React from 'react'
import cls from './Filter.module.scss'

const Filter = ({ setNumberItem, itemOnPage, onFilterUsers, filterValue }) => {

    const options = [10, 25, 50]

    const optionList = options.map((opt, index) => {
        return (
            <option key={index} value={opt}>{opt}</option>
        )
    })

    return (
        <div className={cls.Filter}> 
            <form method="GET">
                <input 
                    className={cls.filterInput} 
                    type="text" 
                    placeholder="Имя пользователя" 
                    value={filterValue}
                    onChange={(e) => onFilterUsers(e.target.value)}
                    />
                <select 
                    disabled={filterValue !== ''}
                    className={cls.filterSelect} 
                    defaultValue={itemOnPage} 
                    onChange={(event) => setNumberItem(event.target.value)}
                >
                    {optionList}
                </select>
            </form>
        </div>
    )
}

export default Filter