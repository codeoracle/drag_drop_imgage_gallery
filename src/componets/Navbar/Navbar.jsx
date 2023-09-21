import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CenterFocusWeakOutlinedIcon from '@mui/icons-material/CenterFocusWeakOutlined';

// import { data } from '../../data';
// import { Link } from 'react-router-dom'


const Navbar = () => {

 

  return (
    // navbar

    <div className='navbar'>
        <div className="navWrap">
            <div className="LogoWrap">
                <CenterFocusWeakOutlinedIcon className='icon'/>
               <span className='logo'>fotohub</span>
            </div>
            <form  className="searchWrap" >
              <div className="inputWrap">
            <input type="text" className='searchInput' placeholder='Features: Travel, Car, Nature,' />

            <SearchOutlinedIcon className='searchIcon'/>
              </div>
            </form>
            <div className="menuWrap">
            <span className='signIn'>Sign out</span>
            <AccountCircleOutlinedIcon className='signinIcon'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar