import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronRight,HiChevronLeft} from "react-icons/hi2";

const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const sliderWidth=window.innerWidth
const Slider = () => {
    const [movieList,setMovieList]=useState([3])
    const elementRef=useRef(null);
    useEffect(()=>{
        getUpcoming()  
    },[])
    const getUpcoming=()=>{
        GlobalApi.getUpcomingMovies.then(res=>{
            setMovieList(res.data.results)
        })
    }
    const sliderRight=(ele)=>{
        ele.scrollLeft+=sliderWidth-100
    }
    const sliderLeft=(ele)=>{
        ele.scrollLeft-=sliderWidth-100
    }
   
    
  return (
    <div>
        <HiChevronLeft className=' hidden md:block text-white text-[30px] absolute mx-8 mt-[200px]'
        onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[200px] right-0'
        onClick={()=>sliderRight(elementRef.current)} />
    
    <div className='flex overflow-x-auto scrollbar-hide px-6 py-2 md:px-16 md:py-4 scroll-smooth' ref={elementRef}>
        {movieList.map((item,i)=>{
            return (
                         
            <img key={item.id+2} src={IMAGE_BASE_URL+item.backdrop_path}
                className='min-w-full md:h-[410px] object-cover object-center mr-7 rounded-md hover:border-[4px]
                border-gray-400 transition-all duration-100 ease-in'  />
             
            )   
            
        })}
    </div>
    
    </div>
  )
}

export default Slider