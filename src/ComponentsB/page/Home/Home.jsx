import React from 'react';
import home from './home.module.scss';
// import axios from 'react';
import { Mycontext } from '../../examplecontext/Examplecontext';
import { useContext } from 'react';
function Home() {
  const {searchdata}=useContext(Mycontext);
  return (
    <div className={home.nav}>
    <h1>Recommended</h1>
    <div  className={home.max_box}>
    {
      searchdata
     }
 </div>
    </div>
  )
  }

export default Home
