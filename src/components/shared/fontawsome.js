import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle, faIdCard, faChartBar, faChevronLeft, faChevronRight } 
from '@fortawesome/free-solid-svg-icons'

const configureFontawsome = () => library.add(faUserCircle, faChartBar, faIdCard, faChevronLeft, faChevronRight)

export default configureFontawsome;
