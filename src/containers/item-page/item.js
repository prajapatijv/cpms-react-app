import WithPageContainer from '../../utility/with-page-container'
import ItemPage from '../../components/item/item-page'

const ItemContainer = (props) => WithPageContainer(ItemPage,  props, "item")

export default ItemContainer