import React from 'react'
import GenereList from '../Constant/GenereList'
import MovieList from './MovieList'

const GenreMovieList = () => {
  return (
    <div>{
    GenereList.genere.map((item,i)=>i<5&&(
         
            <div className='p-8 px-8 ms:px-16' key={item.id}>
                <h2 className='text-[20px]  text-white font-bold'>{item.name}</h2>
                <MovieList genereId={item.id} index={i}/>
            </div>
        
    ))
    }</div>
  )
}

export default GenreMovieList