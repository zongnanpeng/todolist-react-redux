import { GET_LIST, PUT_TODO, DELETE_TODO, POST_TODO } from './actionTypes'

export const getListCreator = (value) => {
    return {
        type: GET_LIST,
        value
    }
}


export const putTodoCreator = (value) => {
    return {
        type: PUT_TODO,
        value
    }
}

export const postTodoCreator = () => {
    return {
        type: POST_TODO,
    }
}

export const deleteTodoCreator = (value) => {
    return {
        type: DELETE_TODO,
        value
    }
}
