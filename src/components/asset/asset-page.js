import React from 'react'

import AssetForm from './asset-form'
import NavLink from '../shared/navlink';
import PageWrapper from '../shared/page-wrapper'

const AssetPage = (props) => {
    return (
        <PageWrapper searchLabel="assets" {...props}>
            <AssetLines {...props}/>
            <AssetForm {...props} />
        </PageWrapper>
    )
}

const AssetLines = ({ assets }) => 
    assets.map((asset) => 
        <NavLink key={asset.id} 
            to={`/assets/${asset.id}`}
            activeClassName="active"
            className="app-list-item list-group-item-action"
            >{asset.assetType} {asset.title}
        </NavLink>
    )

export default AssetPage