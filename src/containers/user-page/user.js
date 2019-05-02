import UserPage from '../../components/user/user-page'
import * as actions from './actions'
import WithPageContainer from '../../components/shared/with-page-container'

const UserContainer = (props) => WithPageContainer(UserPage, actions, props, "user")

export default UserContainer