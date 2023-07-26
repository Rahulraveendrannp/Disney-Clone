import axios from  "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key="a27dc7851ee8d27160f0a15bc2586d7b"


const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=a27dc7851ee8d27160f0a15bc2586d7b'


const options1 = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/now_playing',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjdkYzc4NTFlZThkMjcxNjBmMGExNWJjMjU4NmQ3YiIsInN1YiI6IjYzZDhhOWU1ZmVhMGQ3MDA3YzhjMmZlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.csg0WPCxRkFkHTDbaWEeqWac0Qj4Qv_FkH14YQN9-Tw'
  }
  }
//   const options2 = {
//     method: 'GET',
//     url: 'https://api.themoviedb.org/3/movie/'+id,
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjdkYzc4NTFlZThkMjcxNjBmMGExNWJjMjU4NmQ3YiIsInN1YiI6IjYzZDhhOWU1ZmVhMGQ3MDA3YzhjMmZlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.csg0WPCxRkFkHTDbaWEeqWac0Qj4Qv_FkH14YQN9-Tw'
//     }
//   };



const getUpcomingMovies=axios.request(options1)
const getMovieByGenre=(id)=>{
    return (
        // axios( {
        //     method: 'GET',
        //     url: 'https://api.themoviedb.org/3/movie/'+id,
        //     headers: {
        //       accept: 'application/json',
        //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjdkYzc4NTFlZThkMjcxNjBmMGExNWJjMjU4NmQ3YiIsInN1YiI6IjYzZDhhOWU1ZmVhMGQ3MDA3YzhjMmZlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.csg0WPCxRkFkHTDbaWEeqWac0Qj4Qv_FkH14YQN9-Tw'
        //     }
        //   })
        axios.get("https://api.themoviedb.org/3/discover/movie?api_key=a27dc7851ee8d27160f0a15bc2586d7b&with_genres="+id)
    )
    
}

export default {getUpcomingMovies,getMovieByGenre}

  