import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import './icon.scss'

const Icon = ({ icon }) =>
    <span className="app-icon">
        <FontAwesomeIcon icon={icon} />
    </span>

export default Icon

Icon.propTypes = {
    icon: PropTypes.string.isRequired
}