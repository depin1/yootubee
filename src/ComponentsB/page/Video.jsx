import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
function VideoDetails() {
    const { id }=useParams()
      const [data,setdata]=useState({});
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
      return(
        <div>
      <iframe src={`https://www.youtube.com/embed/${data.id.videoId}`}></iframe>
      <Link to='/' >Home page</Link>
        </div>
      )
  
}

export default VideoDetails;



