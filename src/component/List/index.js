import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

const List = ({ todo, deleteTodo }) => (
    <li>
        <input 
            className="checkbox" 
            type="checkbox" 
            onClick={ () => deleteTodo(todo.id)} />
        <label>{todo.text}</label>
    </li>
)

List.propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default List