import WithPageContainer from '../../utility/with-page-container'
import ItemPage from '../../components/item/item-page'
import * as actions from './actions'

const ItemContainer = (props) => WithPageContainer(ItemPage, actions, props, "item")

export default ItemContainer