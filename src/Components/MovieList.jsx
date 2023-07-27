import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { HiChevronRight,HiChevronLeft} from "react-icons/hi2";
import HrMovieCard from './HrMovieCard';

function MovieList({genereId,index_}) {
    const [movieList,setMovieList]=useState([]);
    const newelementRef=useRef(null);

    useEffect(()=>{
     getMovieByGenreId()
    },[])
    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenre(genereId).then((res)=>{
            setMovieList(res.data.results)
        })   
    }
    const sliderRightCard=(ele)=>{
        ele.scrollLeft+=500
    }
    const sliderLeftCard=(ele)=>{
        ele.scrollLeft-=500
    }
   
  return (
    <div className='relative'>
       <HiChevronLeft className={`hidden md:block text-white text-[50px] p-2 z-10 cursor-pointer absolute
       ${index_%3==0?'mt-[70px]':'mt-[150px]'} `}
        onClick={()=>sliderLeftCard(newelementRef.current)}/> 
    <div className='flex overflow-x-auto gap-4 md:gap-8 scrollbar-hide scroll-smooth pt-5 px-2 md:px-4  md:pb-10' ref={newelementRef}>
        {
            movieList.map((item,i)=>(
                <>
             {index_%3==0 ? <HrMovieCard movie={item} key={i+111} />:<MovieCard movie={item} key={i+111}/>}   
                </>
            ))
        }
    </div>
    <HiChevronRight className={`hidden md:block text-white text-[50px] p-2 z-10 top-0 absolute right-0 cursor-pointer
    ${index_%3==0?'mt-[80px]':'mt-[150px]'}`}
        onClick={()=>sliderRightCard(newelementRef.current)} />
    </div>
  )
}

export default MovieList