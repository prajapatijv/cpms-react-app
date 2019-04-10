import React from 'react';
import { useMappedState } from "redux-react-hook";
import PropTypes from 'prop-types'

import StatusBar from '../../components/shared/status-bar'
//import * as statusbarActionCreators from './actions'

const mapState  = (state, ownProps) => {
    return {
        status: state.status,
    }
}

//const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators(statusbarActionCreators , dispatch)

const StatusBarContainer = () => {
    const { status  } = useMappedState(mapState)
    return (
        <StatusBar status={status}/>
    )
}

export default StatusBarContainer

StatusBar.propTypes = {
    status: PropTypes.object
}