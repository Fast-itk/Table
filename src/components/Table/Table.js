import React from 'react'
import cls from './Table.module.scss'

const Table = () => {
    return (
        <table className={cls.Table}>
            <thead>
                <tr>
                    <th>ID 
                        <div className={cls.arrowsWrapper}>
                            <span className={cls.arrow}>&#9650;</span> 
                            <span className={[cls.arrow, cls.arrowActive].join(' ')}>&#9660;</span> 
                        </div>
                    </th>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Горшков</td>
                    <td>Дмитрий</td>
                    <td>Сергеевич</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Горшков</td>
                    <td>Дмитрий</td>
                    <td>Сергеевич</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Горшков</td>
                    <td>Дмитрий</td>
                    <td>Сергеевич</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Горшков</td>
                    <td>Дмитрий</td>
                    <td>Сергеевич</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Горшков</td>
                    <td>Дмитрий</td>
                    <td>Сергеевич</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Горшков</td>
                    <td>Дмитрий</td>
                    <td>Сергеевич</td>
                </tr>
            </tbody>
        </table>

    )
}

export default Table