import { connect } from 'react-redux'
import { signUp } from 'store/user/service'
import SignUp from 'components/SignUp'
import { isLoading, getErrorMessage } from 'selectors/requests'

const mapStateToProps = (state) => ({
  isLoading: isLoading(state, 'signUp'),
  signUpError: getErrorMessage(state, 'signUp'),
})

const mapDispatchToProps = {
  signUp,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
