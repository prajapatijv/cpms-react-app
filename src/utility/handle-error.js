import {addError} from '../containers/status-bar/actions'

const HandleError = (err, dispatch) => (
    dispatch(addError(err.message))
)

export default HandleError