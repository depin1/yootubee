import React from 'react';
import foo from './footer.module.scss';

//
import {FiAlignJustify}  from 'react-icons/fi';
import {AiOutlineHome , AiOutlineStar ,AiOutlineLike} from 'react-icons/ai';
import {BsFire , BsStopwatch} from 'react-icons/bs';
import {MdSubscriptions} from 'react-icons/md';
import {MdLibraryAdd} from 'react-icons/md';
import {RiFilePaper2Line} from 'react-icons/ri';
import {MdOutlineLibraryMusic } from 'react-icons/md';
import {SiRepublicofgamers} from 'react-icons/si';
import {IoIosArrowDown} from 'react-icons/io';
//icons
import girl from '../Images/icons/Oval.svg';
//img
import { Link } from 'react-router-dom';
//

function Footer() {
  return (
    <div className={foo.Footer}>
      <div className={foo.fixsed_box}>
        <button className={foo.icon}><FiAlignJustify/></button>
       <ul className={foo.block}>
       <li><Link className={foo.link} to='/'><AiOutlineHome className={foo.icons}/> <h4 className={foo.title}>Home</h4></Link> </li>
       <li><Link className={foo.link} to='/trending'><BsFire className={foo.icons}/> <h4 className={foo.title}>Trending</h4></Link> </li>
       <li><Link className={foo.link} to='/'><MdSubscriptions className={foo.icons}/> <h4 className={foo.title}>Subscriptions</h4></Link> </li>
       <div className={foo.br}></div>
       <li className={foo.items}><Link className={foo.link} to='/'><MdLibraryAdd className={foo.icons}/> <h4 className={foo.title}>Library</h4></Link> </li>
       <li><Link className={foo.link} to='/'><RiFilePaper2Line className={foo.icons}/> <h4 className={foo.title}>History</h4></Link> </li>
       <li><Link className={foo.link} to='/'><BsStopwatch className={foo.icons}/><h4 className={foo.title}>Watch later</h4></Link> </li>
       <li><Link className={foo.link} to='/'><AiOutlineStar className={foo.icons}/> <h4 className={foo.title}>Favourites</h4></Link> </li>
       <li><Link className={foo.link} to='/'><AiOutlineLike className={foo.icons}/><h4 className={foo.title}>Liked videos</h4></Link> </li>
       <li><Link className={foo.link} to='/'><MdOutlineLibraryMusic className={foo.icons}/> <h4 className={foo.title}>Music</h4></Link> </li>
       <li><Link className={foo.link} to='/'><SiRepublicofgamers className={foo.icons}/> <h4 className={foo.title}>Games</h4></Link> </li>
       <li className={foo.link2}><button className={foo.btn_sow}><IoIosArrowDown/> <h4 className={foo.title}>Games</h4></button></li>
       <li><ul>
        <li className={foo.link2}>Subscriptions</li>
        <li className={foo.subcribs}><img src={girl} alt="" />Gussie Singleton</li>
        <li className={foo.subcribs}><img src={girl} alt="" />Gussie Singleton</li>
        </ul></li>
       </ul>
      </div>
    </div>
  )
}

export default Footer
