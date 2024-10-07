import { 
    Chip, 
    Grid2, 
    LinearProgress, 
    Pagination, 
    Stack, 
    Typography, 
  } from "@mui/material"; 
  import SerieCard from "../TvSeries/SerieCard"; 
  import { useEffect, useState } from "react"; 
  import moviePageApi from "../../services/serie"; 
  import MovieModal from "../TvSeries/MovieModal";
   
  const Series = () => { 
    const [genres, setGenres] = useState([]); 
    const [movies, setMovies] = useState([]); 
    const [totalPages, setTotalPages] = useState(1); 
    const [loading, setLoading] = useState(false); 
    const [selectedGenres, setSelectedGenres] = useState([]); 
    const [page, setPage] = useState(1); 
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false); 
   
    const getSeries = async (page, genres) => { 
      setLoading(true); 
      const data = await moviePageApi.getSeries(page, genres); 
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
      getSeries(1); 
    }, []); 
   
    const handlePageChange = (e, page) => { 
      setPage(page); 
      getSeries(page); 
    }; 
   
    const handleGenreSelect = (genreId) => { 
      if (!selectedGenres.includes(genreId)) { 
        const newGenres = [...selectedGenres, genreId]; 
        setSelectedGenres(newGenres); 
        getSeries(page, newGenres); 
      } 
    }; 
   
    const handleDelete = (genreId) => { 
      const newGenres = selectedGenres.filter((g) => g !== genreId); 
      setSelectedGenres(newGenres); 
      getSeries(page, newGenres); 
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
          discover series 
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
                <SerieCard movie={movie} type={"movie"} /> 
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
   
  export default Series;