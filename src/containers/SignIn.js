import { connect } from 'react-redux'
import { signIn } from 'store/user/service'
import { isLoading, getErrorMessage } from 'selectors/requests'
import SignIn from 'components/SignIn'

const mapStateToProps = (state) => ({
  isLoading: isLoading(state, 'signIn'),
  signInError: getErrorMessage(state, 'signIn'),
})

const mapDispatchToProps = {
  signIn,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
