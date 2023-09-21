import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Homep from './pages/HomeP/Homep'
import Login from './pages/Login/Login'
import Protected from './componets/Auth/Protected'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Protected/>}>
    <Route path='/' index element={<Homep/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
