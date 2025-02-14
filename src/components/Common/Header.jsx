
import TopBar from '../Layout/TopBar'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div  className=' border-b border-gray-200'>
        {/* Topbar */}
        <TopBar/>
        {/* NavBar */}
        <NavBar/>
        {/* Cart Drawer */}
    </div>
  )
}

export default Header