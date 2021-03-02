import { COUNT_PAGES, FILTER_USERS, GET_USERS, ITEMS_ON_PAGE, SORT_USERS } from "../types"

export const UsersReducer = (state, action) => {
    switch(action.type) {
        case GET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case ITEMS_ON_PAGE: {
            return {
                ...state,
                itemOnPage: action.value
            }
        }
        case COUNT_PAGES: {
            return {
                ...state,
                pages: action.pages
            }
        }
        case SORT_USERS: {
            return {
                ...state,
                users: action.users,
                reverse: action.reverse
            }
        }
        case FILTER_USERS: return {
            ...state,
            filterUsers: action.filterUsers,
            filterValue: action.filterValue
        }
        default: return state
    }
}