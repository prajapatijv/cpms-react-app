import React from 'react'
import PropTypes from 'prop-types'

const PageTitle = ({title}) => 
    <div className="app-page-title">
        <h4>{title}</h4>
    </div>

export default PageTitle;


PageTitle.propTypes = {
    title: PropTypes.string
}