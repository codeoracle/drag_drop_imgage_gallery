import './header.scss'
import Navbar from '../Navbar/Navbar'


const Header = () => {
  return (
    // Header
    
    <div className='header' style={{ backgroundImage: "url(./img/Poster.png)"
}}>
        <Navbar/>
        <div className="headerContainer">
            <div className="headerWrap">
            <h1 className="headerTitle">Drag and drop your favorite photo</h1>
            <span className="headerDesc">Find your inspiration in the home to tens of billions of photos. Find your inspiration in the home to tens of billions of photos.</span>
            <button className='btn'> Start for free</button>
            </div>
        </div>
    </div>
  )
}

export default Header