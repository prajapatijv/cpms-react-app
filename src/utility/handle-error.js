import {addError} from '../containers/status-bar/actions'

const HandleError = (errorType, err, dispatch) => {
    dispatch({type: errorType})
    dispatch(addError(err.message))
}

export default HandleError