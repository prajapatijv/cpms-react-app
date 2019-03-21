import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle, faAddressBook, faIdCard, faChartBar } 
from '@fortawesome/free-solid-svg-icons'

const configureFontawsome = () => library.add(faUserCircle, faChartBar, faIdCard)

export default configureFontawsome;
