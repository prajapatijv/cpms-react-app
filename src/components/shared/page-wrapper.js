import React from 'react'

import SearchBar from './search-bar'
import { Spinner } from './spinner'

const PageWrapper = (props) => 
    <div className="app-page item-page py-3">
        <div className="row no-gutters  px-0" >
            <div className="col-md-4 app-list">
                <LinesContainer {...props}>
                    {props.children[0]}
                </LinesContainer>
            </div>
            <div className="col-md-7 app-form">
                {props.children[1]}
            </div>
        </div>
    </div>


const LinesContainer = (props) =>
    <React.Fragment>
        <SearchBar {...props} placeholder={props.fetching ? `Fetching ${props.searchLabel}` : `Search ${props.searchLabel}` }/>
        <Spinner show={props.fetching}/> 
        <ul className="list-group list-group-flush">
             {!props.fetching && props.children}
        </ul>
    </React.Fragment>

export default PageWrapper