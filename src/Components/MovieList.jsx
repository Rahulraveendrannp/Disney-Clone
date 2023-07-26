import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { HiChevronRight,HiChevronLeft} from "react-icons/hi2";
import HrMovieCard from './HrMovieCard';

function MovieList({genereId,index_}) {
    const [movieList,setMovieList]=useState([]);
    const elementRef=useRef(null);

    useEffect(()=>{
     getMovieByGenreId()
    },[])
    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenre(genereId).then((res)=>{
            setMovieList(res.data.results)
        })   
    }
    const sliderRight=(ele)=>{
        ele.scrollLeft+=500
    }
    const sliderLeft=(ele)=>{
        ele.scrollLeft-=500
    }
   
  return (
    <div className='relative'>
       <HiChevronLeft className={`hidden md:block text-white text-[50px] p-2 z-10 cursor-pointer absolute
       ${index_%2==0?'mt-[80px]':'mt-[150px]'} `}
        onClick={()=>sliderLeft(elementRef.current)}/> 
    <div className='flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth pt-5 px-3 pb-10' ref={elementRef}>
        {
            movieList.map((item,i)=>(
                <>
             {index_%2==0?<HrMovieCard movie={item} />:<MovieCard movie={item} />}   
                </>
            ))
        }
    </div>
    <HiChevronRight className={`hidden md:block text-white text-[50px] p-2 z-10 top-0 absolute right-0 cursor-pointer
    ${index_%2==0?'mt-[80px]':'mt-[150px]'}`}
        onClick={()=>sliderRight(elementRef.current)} />
    </div>
  )
}

export default MovieList