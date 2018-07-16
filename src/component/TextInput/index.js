import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class TextInput extends Component {
    static propTypes = {
        onSave: PropTypes.func.isRequired,
        text: PropTypes.string,
        newTodo: PropTypes.bool
    }
    state = {
        text: this.props.text || ''
    }
    handleSubmit = e => {
        const text = e.target.value.trim()
        if (e.which === 13) {
            this.props.onSave(text)
            if (this.props.newTodo) {
                this.setState({ text: '' })
            }
        }
    }
    handleChange = e => {
        this.setState({ text: e.target.value })
    }
    render() {
        return (
            <div>
                <input 
                className="checkbox" 
                type="checkbox" />
                <input
                    className="input"
                    type="text"
                    autoFocus="true"
                    value={this.state.text}
                    onChange={this.handleChange}
                    onKeyDown={this.handleSubmit} />
            </div>
        )
    }
}

export default TextInput
