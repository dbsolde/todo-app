import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './style.css';
import PlusImage from '../../asset/images/plus-icon.png'
import TextInput from '../TextInput'
import { addTodo } from '../../actions'

class Button extends Component {
    state = {
        showInput: false,
    }
    onClick = () => {
        this.setState({ showInput: !this.state.showInput });
    }
    render() {
        const showInput = this.state.showInput
        const addTodo = this.props.addTodo
        return (
            <div className="button-div">
                <div>
                    <button className={(showInput) ? `Button active` : `Button`} onClick={this.onClick}>            
                        <img src={PlusImage} alt="Add Todo" />
                        <span> Add a task</span>
                    </button>
                </div>
                <div style={{clear:'both'}}>
                    {showInput && 
                        <TextInput 
                            newTodo
                            onSave={(text) => {
                                if (text.length !== 0) {
                                    addTodo(text)
                                }
                            }}
                        />
                    }
                </div>
            </div>
        )
    }
}

Button.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default  connect(null, { addTodo })(Button)
