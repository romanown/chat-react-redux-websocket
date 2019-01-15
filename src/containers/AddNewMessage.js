import { connect } from 'react-redux';
import AddNewMessageComponent from '../components/AddNewMessage'
import { addMessage } from "../store/actions";

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author) => {
    dispatch(addMessage(message, author))
  }
})

export const AddNewMessage = connect(() => ({}), mapDispatchToProps)(AddNewMessageComponent)