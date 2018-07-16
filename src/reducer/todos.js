import {
    ADD_TODO,
    DELETE_TODO
    } from '../constants/ActionTypes'

const initialState = [
    {
        text: 'go shopping',
        completed: false,
        id: 1
    },
    {
        text: 'call the telephone company',
        completed: false,
        id: 2
    },
    {
        text: 'call mother',
        completed: false,
        id: 3
    },
    {
        text: 'learn react.js',
        completed: false,
        id: 4 
    },
    {
        text: 'buy jetskie',
        completed: false,
        id: 5
    },
    {
        text: 'get some eggs',
        completed: false,
        id: 6
    },
    {
        text: 'milk the cow',
        completed: false,
        id: 7
    }
]

const todos = (state = initialState, action) => {
    switch (action.type) { 
        case ADD_TODO:
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    completed: false,
                    text: action.text
                }
            ]
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id)

        default:
            return state
    }
}

export default todos