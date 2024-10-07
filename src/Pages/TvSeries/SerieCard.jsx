import { Badge, Card,  CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import { imageURL } from "../../services/base";



const MovieCard = ({movie}) => {
    return (
      <Badge badgeContent={movie.vote_average} color={movie.vote_average < 6 ? "error" : "success"}>
                 <Card variant="outlined">
                  <CardActionArea sx={{ p: 1,}}>
      <CardMedia
        sx={{component: "img", height: 400, borderRadius: "15px", display: "flex",
          justifyContent: "center",alignItems: "center", width: "350px", }}
        image={imageURL+movie.poster_path}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign={"center"} minHeight={100} mb={0}>
         {movie.original_name}
        </Typography>
        <Stack display={"flex"} justifyContent={"space-between"}>
        <Typography variant="body2" sx={{ color: 'white',fontFamily: "Montserrat", }}>
          movie
        </Typography>
        <Typography variant="body2" sx={{ color: 'white',fontFamily: "Montserrat", }}>
          {movie.first_air_date}
        </Typography>
        </Stack>
      </CardContent>
    </CardActionArea>
    </Card>
    </Badge>
    );
};

export default MovieCard;