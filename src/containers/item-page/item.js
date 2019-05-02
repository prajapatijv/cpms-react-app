import ItemPage from '../../components/item/item-page'
import * as actions from './actions'
import WithPageContainer from '../../components/shared/with-page-container'

const ItemContainer = (props) => WithPageContainer(ItemPage, actions, props, "item")

export default ItemContainer