import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Home from './ComponentsB/page/Home/Home.jsx';
import Trending from './ComponentsB/page/Trending/Trending'
import Navbar from './ComponentsB/Navbar/Navbar';
import Footer from './ComponentsB/Footer/Footer';
function App() {
  return (
 
      <div className='App'>
         <Navbar/>
          <Footer/>
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/trending' element={<Trending/>}/>
         </Routes>
      </div>
    
  )
}

export default App
