import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import StatusBar from '../../components/shared/status-bar'
import * as statusbarActionCreators from './actions'

const mapStateToProps = (state, ownProps) => {
    return {
        status: state.status,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators(statusbarActionCreators , dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(StatusBar)