import React from 'react'

import { css } from 'emotion'
import PropTypes from 'prop-types'

const PageTitle = ({title}) => 
    <div className={styles.title}>
        <h4 >{title}</h4>
    </div>

export default PageTitle;

const styles = {
    title: css`
    h4 {
        padding-left: 0;
    }
    `
}

PageTitle.propTypes = {
    title: PropTypes.string
}