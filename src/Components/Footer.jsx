import { Button , Paper } from "@mui/material";
import { Link } from "react-router-dom";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';


const Footer = () => {
    return (
        <Paper
        elevation={2}
        sx={{display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            gap: '20px',
        }}
        >
           
           <Link to="/">
            <Button sx={{display: 'flex', flexDirection: 'column'}}>
                <WhatshotIcon/>
                Trending
            </Button>
            </Link>
            <Link to="/movies">
            <Button sx={{display: 'flex', flexDirection: 'column'}}>
                <MovieIcon/>
                Movies
            </Button>
            </Link>
            <Link to="/series">
            <Button sx={{display: 'flex', flexDirection: 'column'}}>
                <TvIcon/>
                TV series
            </Button>
            </Link>
            <Link to="/search">
            <Button sx={{display: 'flex', flexDirection: 'column'}}>
                <SearchIcon/>
                Search
            </Button>
            </Link>
        </Paper>
    )
}

export default Footer;