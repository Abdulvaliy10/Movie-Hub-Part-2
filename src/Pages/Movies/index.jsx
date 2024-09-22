import { Chip, Grid2, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import moviePageApi from "../../services/movies";


const Movies = () => {
    const [genres, setGenres] = useState([]);
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const getGenres = async () => {
            const data = await moviePageApi.getGenres();
            setGenres(data);
        };
        const getMovies = async () => {
            const data = await moviePageApi.getMovies();
            console.log(data);
            setMovies(data.results);
        };
        getGenres();
        getMovies();
    }, []);
    return (
        <>
        <Typography variant="h1"
        textTransform="capitalize"
        component={"h6"}
        sx={{
            fontSize: "32px",
            fontWeight: "thin",
            letterSpacing: 3,
            textAlign: "center",
        }}
        >
            Discover Movies
            </Typography>
            {genres.map((genre) => (
                <Chip label={genre.name} key={genre.id} variant="outlined" />
            ))}
            <Grid2 container spacing={2}>
                {movies.map((movie, i) => (
                    <Grid2 key={i} size={{md:3 , sm:4 , xs:6}}>
                        <MovieCard movie={movie} />
                    </Grid2>
                ))}
            </Grid2>
        </>
    );
};

export default Movies;