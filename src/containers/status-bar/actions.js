export const ADD_ERROR = 'ADD_ERROR';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const addError = (errorMessage) => {
    return dispatch => {
        dispatch({ 
            type:ADD_ERROR,
            payload:errorMessage
        })
    }
}

export const clearErrors = () => {
    return dispatch => {
        dispatch({ 
            type: CLEAR_ERRORS
        })
    }
}

