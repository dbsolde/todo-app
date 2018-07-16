import React from 'react'
import { connect } from 'react-redux'
import Button from '../component/Button'

export const Header = ({ todos }) => {
    return (
        <div className="header">
            <h3>TASKS</h3>
            <h1>Nico's Smith's list ({todos.length})</h1>
            <hr className="hr"/>
            <Button />
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps, null )(Header)