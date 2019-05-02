import WithPageContainer from '../../utility/with-page-container'
import UserPage from '../../components/user/user-page'
import * as actions from './actions'

const UserContainer = (props) => WithPageContainer(UserPage, actions, props, "user")

export default UserContainer