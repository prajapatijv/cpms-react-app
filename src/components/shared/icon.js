import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css } from 'emotion'
import PropTypes from 'prop-types'

const Icon = ({ icon }) =>
    <span className={styles.icon}>
        <FontAwesomeIcon icon={icon} />
    </span>

export default Icon

const styles = {
    icon: css`
        padding: 0 0.5rem;
    `
}

Icon.propTypes = {
    icon: PropTypes.string.isRequired
}