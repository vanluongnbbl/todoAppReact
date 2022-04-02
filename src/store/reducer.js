import {
    SET_TODO_INPUT, 
    ADD_TODO_INPUT,
    DELETE_TODO_INPUT,
    EDIT_TODO_INPUT
} from './constants'

const initState = {
    todos: [],
    todoInput: ''
}

function reducer(state, action) {

    let newTodos = [...state.todos]
    switch (action.type) {
        case SET_TODO_INPUT: 
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO_INPUT:
            newTodos.push(action.payload)
            return {
                ...state,
                todos: newTodos
            }
        case DELETE_TODO_INPUT: 
            newTodos.splice(action.payload, 1)
            return {
                ...state,
                todos: newTodos
            }
        case EDIT_TODO_INPUT:
            newTodos[action.index] =  action.payload
            return {
                ...state,
                todos: newTodos
            }
        default:
            throw new Error('Invalid actions')
    }
}

export { initState } 
export default reducer