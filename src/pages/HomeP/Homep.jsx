import './hoemp.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CenterFocusWeakOutlinedIcon from '@mui/icons-material/CenterFocusWeakOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext,  arrayMove, rectSortingStrategy } from '@dnd-kit/sortable'
import { SortableDetail } from '../../SortableDetail'
import { data } from '../../data'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';


const Home = () => {

const [details, setDetails] = useState(data);
const [search, setSearch] = useState('');

const onDragEnd = (event) =>{
    const {active, over} = event;
    if (active.id === over.id){
        return;
    }

    setDetails((details) => {
        const oldIndex = details.findIndex((detail) => detail.id === active.id)
        const newIndex = details.findIndex((detail) => detail.id === over.id)
        return arrayMove(details, oldIndex, newIndex);
    }) 
    
  
    
};

  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth)
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login')
  }


  return (
    <div className='home'>

         {/* Header */}
    
    <div className='header' style={{ backgroundImage: "url(./img/bg4.jpg)"

}}>
        {/* <Navbar/> */}

        <div className='navbar'>
        <div className="navWrap">
            <div className="LogoWrap">
                <CenterFocusWeakOutlinedIcon className='icon'/>
               <span className='logo'>fotohub</span>
            </div>
            <form  className="searchWrap" >
              <div className="inputWrap">
            <input type="text" className='searchInput' placeholder='Features: Travel, Car, Nature, Developer, Culture' value={search} onChange={(e) => setSearch(e.target.value)} />

            <SearchOutlinedIcon className='searchIcon'/>
              </div>
            </form>
            <div className="menuWrap">
            <span className='signIn' onClick={handleLogout}>Sign out</span>
            <AccountCircleOutlinedIcon className='signinIcon'/>
            </div>
        </div>
    </div>

        <div className="headerContainer">
            <div className="headerWrap">
            <h1 className="headerTitle">We understand the magic that happens when a perfect moment is captured. </h1>
            <span className="headerDesc">With our drag-and-drop interface, you have the power to curate your own visual journey. Arrange and rearrange images as you please, creating your own narratives and visual stories.</span>
            <button className='btn'><span>Start now</span><KeyboardArrowDownIcon/></button>
            </div>
        </div>
    </div>

           <div className='featured'>


        {/* featured images */}

        <div className="featuredWrap">
                <h2 className='title'>Click, drag, drop - recreate</h2>
            <div className="imgList">

            <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext items={details} strategy={rectSortingStrategy}>

                {details.filter((sort) =>{
                  if(search == ''){
                    return sort;
                  }else if(sort.feature.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                    return sort;
                  }
                }).map((detail) =>(
                    <SortableDetail key={detail.id} detail={detail}/>
                    ))}
                    </SortableContext>
                    </DndContext>
               
                    
            </div>
        </div>
      
      
    </div>

                  {/* Footer */}

        <footer className="footer">
          <Link to={'https://yunus-mustapha.netlify.app/'} target='_blank' className='copyRight'>
                © 2023 fotohub by 
                   Yunus Mustapha Adedayo
                   </Link>
        </footer>
    </div>
  )
}

export default Home