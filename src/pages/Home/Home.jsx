import './hoem.scss'
import Feature from "../../componets/Features/Feature"
import Header from "../../componets/Header/Header"
import { data } from '../../data'
import Navbar from '../../componets/Navbar/Navbar'
import { useState } from 'react'


const Home = () => {

const [details, setDetails] = useState(data);

const handleSearch = (searchTerm) => {
    const filtered = details.filter((fea) =>
      fea.feature.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDetails(filtered);
     console.log(filtered);
  };



  return (
    <div className='home'>
        <Header/>
      <Navbar onSearch={handleSearch}/>
        <Feature datas={details}/>
        <footer className="footer">
          <span to={'https://yunus-mustapha.netlify.app/'} target='_blank' className='copyRight'>
                © 2023 MovieBox by 
                   Yunus Mustapha Adedayo
                   </span>
        </footer>
    </div>
  )
}

export default Home