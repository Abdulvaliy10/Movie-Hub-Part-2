import { Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';

const Footer = () => {
  return (
    <Paper
      elevation={2}
      sx={{
        width: "100%",
        bottom: "0",
        zIndex: "100",
        position: "sticky",
        backgroundColor: "#2d313a",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "70px",
      }}
    >
      <Link to="/" sx="textDecoration: 'none'">
        <Button sx={{ display: 'flex', flexDirection: 'column' , color: 'white',}}>
          <WhatshotIcon />
          Trending
        </Button>
      </Link>
      <Link to="/movies">
        <Button sx={{ display: 'flex', flexDirection: 'column', color: 'white' }}>
          <MovieIcon />
          Movies
        </Button>
      </Link>
      <Link to="/series">
        <Button sx={{ display: 'flex', flexDirection: 'column', color: 'white' }}>
          <TvIcon />
          TV series
        </Button>
      </Link>
      <Link to="/search">
        <Button sx={{ display: 'flex', flexDirection: 'column', color: 'white' }}>
          <SearchIcon />
          Search
        </Button>
      </Link>
    </Paper>
  );
};

export default Footer;
