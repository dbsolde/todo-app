import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import { bindActionCreators } from 'redux'
import Lists from '../component/Lists'

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

const Todos = connect(
    mapStateToProps,
    mapDispatchToProps
)(Lists)
  
export default Todos