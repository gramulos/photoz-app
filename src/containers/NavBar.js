import { connect } from 'react-redux'
import { signOut } from 'store/user/actions'
import { getLoggedUser } from 'selectors/user'
import NavBar from 'components/NavBar'

const mapStateToProps = (state) => ({
  user: getLoggedUser(state),
})

const mapDispatchToProps = {
  signOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
