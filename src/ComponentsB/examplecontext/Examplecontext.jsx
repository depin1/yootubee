import { createContext } from "react";
import { useState, useEffect } from 'react';
import home from '../page/Home/home.module.scss'
export const Mycontext=createContext();
export const Myprowider=({children})=>{
  const [serach,setserach]=useState('')
    const [data,setdata]=useState([]);
    async function fatchDat() {
   const url = 'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50';
     const options = {
       method: 'GET',
       headers: {
           'X-RapidAPI-Key': '6737732785mshaf91e3ff0c0d69fp100475jsn557f8f01c7a3',
           'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
       }
   };
     // const urlvideo=`https://www.youtube.com/embed/${id}7D?autoplay=1`
     try {
       const response = await fetch(url, options);
       const result = await response.json();
       setdata(result.items);
     } catch (error) {
       console.log('hato');
     }
    }
    console.log(data);
   
     useEffect(()=>{
     fatchDat();
    },[])
    const searchdata=data.filter((el)=>{
      if (!serach) {
       return el
      }else if (data.snippet?.channelTitle.includes(serach)) {
       return el
      }
      }).map((videos)=>(
       <div className={home.map} key={videos} > 
       <img className={home.image} src={videos.snippet.thumbnails.medium.url} alt={videos.snippet.title} />
        <h3>{videos.snippet?.channelTitle}</h3>
        </div>
      ))
    return (
        <Mycontext.Provider value={{searchdata,serach,setserach}}>
            {children}
        </Mycontext.Provider>
    )
}