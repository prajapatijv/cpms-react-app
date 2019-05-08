import  withPageReducer from '../../utility/with-page-reducer'
import keys from '../container-types'

const assets = (state=initialState, action) => {
    return withPageReducer(keys.Asset, state, action, defaultAsset, (criteria) => byAny(criteria))
}

const defaultAsset= { 
    id:0,
    firstName:"",
    lastName:"",
    userName:"",
    password:""
}

const initialState = {
    assets:[]
} 

const byAny = criteria => asset => {
    if (criteria === undefined) {
        return true
    }
    else  {
        return asset.title.toLowerCase().match(criteria.toLowerCase()) ||
            asset.description.toLowerCase().match(criteria.toLowerCase()) ||
            asset.transcripts.toLowerCase().match(criteria.toLowerCase())
    }
}

export default assets