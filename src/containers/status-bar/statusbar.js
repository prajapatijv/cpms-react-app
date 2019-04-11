import React from 'react';
import { useMappedState, useDispatch } from "redux-react-hook";

import Statusbar from '../../components/shared/status-bar'
import * as actions from './actions'

const StatusBar = () => {
    const dispatch = useDispatch()

    const mapState  = (state) => {
        return {
            status: state.status,
        }
    }
    
    const { status  } = useMappedState(mapState)

    return (
        <Statusbar status={status} 
            clearInfos={() => dispatch(actions.clearInfos())}
            clearErrors={() => dispatch(actions.clearErrors())}
        />
    )
}

export default StatusBar
