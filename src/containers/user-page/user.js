import WithPageContainer from '../../utility/with-page-container'
import UserPage from '../../components/user/user-page'

const UserContainer = (props) => WithPageContainer(UserPage, props, "user")

export default UserContainer