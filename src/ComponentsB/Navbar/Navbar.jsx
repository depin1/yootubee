import React from 'react';
import nav from './nav.module.scss';
import { useState } from 'react';
//sass
import Login from '../Login/Login';
//images
import yootube from '../Images/icons/Shape.svg';
//icons
import {GrSearch} from 'react-icons/gr';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import {FiMenu} from 'react-icons/fi';
import {IoIosNotificationsOutline} from 'react-icons/io';
import { useContext } from 'react';
import { Mycontext } from '../examplecontext/Examplecontext';
function Navbar() {
  const {serach,setserach}=useContext(Mycontext);
  return (
    <div className={nav.position}>
      <div className={nav.navigane}>
        <div className={nav.left_box}>    
          <img src={yootube} alt="yootube" /> 
          <h2 className={nav.title}>YooTube</h2>
        </div>
        <div className={nav.for_search}>
          <input className={nav.input} value={serach} onChange={(e)=>setserach(e.target.value)} type="text" placeholder='Search'  />
          <GrSearch className={nav.GrSearch}/>
        </div>
        <div className={nav.end_box}>
          <AiOutlineVideoCamera className={nav.AiOutlineVideoCamera} /><FiMenu className={nav.FiMenu}/><IoIosNotificationsOutline className={nav.IoIosNotificationsOutline}/>
          <Login/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
