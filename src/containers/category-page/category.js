import WithPageContainer from '../../utility/with-page-container'
import CategoryPage from '../../components/category/category-page'

const CategoryContainer = (props) => WithPageContainer(CategoryPage,  props, "category")

export default CategoryContainer