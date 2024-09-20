import { Chip, Grid2, Typography } from "@mui/material"
import MovieCard from "./MovieCard";


const types = ["Action", "Comedy", "Drama", "Horror"];


const movies = [
    {
        name: "The Penguin",
        image: "https://image.tmdb.org/t/p/w300/vOWcqC4oDQws1doDWLO7d3dh5qc.jpg",
        img:"https://image.tmdb.org/t/p/w300/vOWcqC4oDQws1doDWLO7d3dh5qc.jpg",
        type: "movie",
        date: "2024-07-24",
        rating: "5"
    },
    {
        name: "Deadpool",
        image: "	https://image.tmdb.org/t/p/w300/vOWcqC4oDQws1doDWLO7d3dh5qc.jpg",
        type: "movie",
        date: "2024-07-24",
        rating: "5"
    },
    {
        name: "Deadpool",
        image: "https://image.tmdb.org/t/p/w300/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
        type: "movie",
        date: "2024-07-24",
        rating: "5"
    },
    {
        name: "Deadpool",
        image: "https://image.tmdb.org/t/p/w300/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
        type: "movie",
        date: "2024-07-24",
        rating: "5"
    },
    {
        name: "Deadpool",
        image: "https://image.tmdb.org/t/p/w300/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
        type: "movie",
        date: "2024-07-24",
        rating: "5"
    },
    {
        name: "Deadpool",
        image: "https://image.tmdb.org/t/p/w300/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
        type: "movie",
        date: "2024-07-24",
        rating: "5"
    },
]

const Movies = () => {
    return (
        <>
        <Typography
        variant="h1"
        textTransform="capitalize"
        component="h6"
        sx={{
            textAlign: 'center',
            fontSize: "32px",
            fontWeight: "thin",
            letterSpacing: 3,
        }}
        >
        Discover Movies    
        </Typography>
        {types.map((type) => (
            <Chip label={type} key={type} />
        ))}
        <Grid2 container spacing={2}>
        {movies.map((movie , i) => (
            <Grid2 key={i} size={{ xs: 6, md: 3 , sm: 4}}>
            <MovieCard movie={movie} />
            </Grid2>
        ))}
    </Grid2>

        </>
    )
}

export default Movies;