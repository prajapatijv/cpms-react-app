import ItemPage from '../../components/item/item-page'
import * as actions from './actions'
import ContainerWrapper from '../../components/shared/container-wrapper'

const ItemContainer = (props) => ContainerWrapper(ItemPage, actions, props, "itemState", "items", "item")

export default ItemContainer