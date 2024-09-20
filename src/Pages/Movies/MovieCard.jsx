import { Badge, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material"


const MovieCard = (movie) => {
    return (
        <Badge badgeContent={movie.rating} color="secondary">
            <Card variant="outlined">
                <CardActionArea sx={{p: 1}}>
                    <CardMedia
                        component="img"
                        height={"300px"}
                        width={"200px"}
                        image={movie.image}
                        alt="deadpool"/>
                    <CardContent>
                        <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        textAlign={"center"}
                    >
                        {movie.name}
                    </Typography>
                    <Stack
                    display={"flex"}
                    justifyContent={"center"}
                    direction={"row"}
                    >
                        <Typography variant="body2">{movie.type}</Typography>
                        <Typography variant="body2">{movie.date}</Typography>
                    </Stack>
                    </CardContent>
                 </CardActionArea>
                 </Card>
            </Badge>
    );
};

export default MovieCard;