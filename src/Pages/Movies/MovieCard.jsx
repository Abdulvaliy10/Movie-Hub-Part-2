import { Badge, Button, Card,  CardActions, CardContent, CardMedia, Typography } from "@mui/material"


const MovieCard = (movie) => {
    return (
        <Badge badgeContent={movie.rating} color="secondary">
                 <Card sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "300px",
                  marginLeft: "25px",
                  position: "relative",
                  fontFamily: "Montserrat",
                  borderRadius: "15px",
                  marginBottom: "25px",
                 }}>
      <CardMedia
        sx={{ height: 400 , width: 300, borderRadius: "15px", display: "flex",
          justifyContent: "space-between",
         }}
        image="https://image.tmdb.org/t/p/w300/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Deadpool
        </Typography>
        <Typography variant="body2" sx={{ color: 'white',fontFamily: "Montserrat", }}>
          movie
        </Typography>
        <Typography variant="body2" sx={{ color: 'white',fontFamily: "Montserrat", }}>
          2024-07-24
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn more</Button>
      </CardActions>
    </Card>
            </Badge>
    );
};

export default MovieCard;