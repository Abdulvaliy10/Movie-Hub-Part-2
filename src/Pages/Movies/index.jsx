import { 
    Chip, 
    Grid2, 
    LinearProgress, 
    Pagination, 
    Stack, 
    Typography, 
  } from "@mui/material"; 
  import MovieCard from "./MovieCard"; 
  import { useEffect, useState } from "react"; 
  import moviePageApi from "../../services/movies"; 
  import MovieModal from "../Movies/MovieModal";
   
  const Movies = () => { 
    const [genres, setGenres] = useState([]); 
    const [movies, setMovies] = useState([]); 
    const [totalPages, setTotalPages] = useState(1); 
    const [loading, setLoading] = useState(false); 
    const [selectedGenres, setSelectedGenres] = useState([]); 
    const [page, setPage] = useState(1); 
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false); 
   
    const getMovies = async (page, genres) => { 
      setLoading(true); 
      const data = await moviePageApi.getMovies(page, genres); 
      setMovies(data.results); 
      setTotalPages(data.total_pages); 
      setLoading(false); 
    }; 
   
    const getGenres = async () => { 
      const data = await moviePageApi.getGenres(); 
      setGenres(data); 
    }; 
   
    useEffect(() => { 
      getGenres(); 
      getMovies(1); 
    }, []); 
   
    const handlePageChange = (e, page) => { 
      setPage(page); 
      getMovies(page); 
    }; 
   
    const handleGenreSelect = (genreId) => { 
      if (!selectedGenres.includes(genreId)) { 
        const newGenres = [...selectedGenres, genreId]; 
        setSelectedGenres(newGenres); 
        getMovies(page, newGenres); 
      } 
    }; 
   
    const handleDelete = (genreId) => { 
      const newGenres = selectedGenres.filter((g) => g !== genreId); 
      setSelectedGenres(newGenres); 
      getMovies(page, newGenres); 
    }; 
   
    return ( 
      <> 
        <MovieModal open={isDetailModalOpen} setOpen={setIsDetailModalOpen} /> 
        <Typography 
          variant="h1" 
          textTransform="capitalize" 
          component="h6" 
          sx={{ 
            textAlign: "center", 
            fontSize: "32px", 
            fontWeight: "thin", 
            letterSpacing: 3, 
          }} 
          my={2} 
        > 
          discover movies 
        </Typography> 
        {genres.map((genre) => ( 
          <Chip 
            label={genre.name} 
            key={genre.id} 
            clickable 
            onClick={() => handleGenreSelect(genre.id)} 
            onDelete={ 
              selectedGenres.includes(genre.id) 
                ? () => handleDelete(genre.id) 
                : undefined 
            } 
          /> 
        ))} 
        {loading ? ( 
          <LinearProgress /> 
        ) : ( 
          <Grid2 my={2} container spacing={2}> 
            {movies.map((movie, i) => ( 
              <Grid2 
                onClick={() => { 
                  setIsDetailModalOpen(movie); 
                }} 
                key={i} 
                size={{ md: 3, sm: 4, xs: 6 }} 
              > 
                <MovieCard movie={movie} type={"movie"} /> 
              </Grid2> 
            ))} 
          </Grid2> 
        )} 
        <Stack my={5} justifyContent="center" alignItems="center"> 
          <Pagination 
            count={totalPages} 
            onChange={handlePageChange} 
            color="primary" 
          /> 
        </Stack> 
      </> 
    ); 
  }; 
   
  export default Movies;