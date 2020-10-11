import { connect } from 'react-redux'
import { getLoggedUser as getLoggedUserData } from 'store/user/service'
import { getLoggedUser } from 'selectors/user'
import PrivateRoute from 'components/PrivateRoute'

const mapStateToProps = (state) => ({
  user: getLoggedUser(state),
})

const mapDispatchToProps = {
  getLoggedUser: getLoggedUserData,
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
