import React , { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import StatusBar from '../../components/shared/status-bar'
import * as statusbarActionCreators from './actions'

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators(statusbarActionCreators , dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(StatusBar)