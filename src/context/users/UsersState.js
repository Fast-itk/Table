import { useReducer } from "react"
import { generateArray } from "../../utils/utils"
import { UsersContext } from "./UsersContext"
import { UsersReducer } from "./UsersReducer"
import faker from 'faker/locale/ru'
import { COUNT_PAGES, FILTER_USERS, GET_USERS, ITEMS_ON_PAGE, SORT_USERS } from "../types"


const UserState = ({ children }) => {

    faker.locale = "ru"

    const initialState = {
        users: [],
        itemOnPage: 25,
        pages: [],
        reverse: false,
        filterUsers: [],
        filterValue: ''
    }

    const [state, dispatch] = useReducer(UsersReducer, initialState)

    const {users, itemOnPage, pages, reverse, filterUsers, filterValue} = state

    const generateUsers = num => {
        const arrayNumbers = generateArray(num)
        const users = arrayNumbers.map(item => {
            return {
                id: item,
                surName: faker.name.lastName(),
                firstName: faker.name.findName().split(' ')[0],
                middleName: faker.name.middleName()
            }
        })

        dispatch({type: GET_USERS, users})
    }

    const setNumberItem = (value) => {
        dispatch({type: ITEMS_ON_PAGE, value: +value})
    }

    const setCountPages = () => {
        const calcPages = Math.ceil(users.length / itemOnPage)
        const pages = generateArray(calcPages)
        dispatch({type: COUNT_PAGES, pages})
    }

    const sortUsers = (isReverse) => {
        const copyUsers = [...users]
        const reverseUsers = copyUsers.reverse()

        dispatch({type: SORT_USERS, users: reverseUsers, reverse: isReverse})
    }

    const onFilterUsers = (value) => {

            const copyUsers = [...users]
            const currentUser = copyUsers.filter((user) => {
                const fullName = `${user.surName.toLowerCase()} ${user.firstName.toLowerCase()} ${user.middleName.toLowerCase()}`
                return fullName.indexOf(value.toLowerCase()) !== -1
            })
            if (value === '') {
                dispatch({type:FILTER_USERS, filterUsers: [], filterValue: value})
            } else {
                dispatch({type:FILTER_USERS, filterUsers: currentUser, filterValue: value})
            }
    }

    return (
        <UsersContext.Provider value={{
            generateUsers, setNumberItem, setCountPages, 
            users, itemOnPage, pages, sortUsers, reverse, 
            onFilterUsers, filterUsers, filterValue
        }}
        >
            { children }
        </UsersContext.Provider>
    )
}

export default UserState