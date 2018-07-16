import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import List from '../List'

const Lists = ({ todos, actions }) => (
    <div className="lists">
        <ul>
            {todos.map(todo =>
                <List 
                    key={todo.id}
                    todo={todo}
                    {...actions}
                />
            )}
        </ul>
    </div>
)

Lists.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    actions: PropTypes.object.isRequired
}

export default Lists