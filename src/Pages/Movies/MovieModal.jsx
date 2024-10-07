import { Box, Button, LinearProgress, Modal, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import moviePageApi from "../../services/movies";
import { imageURL } from "../../services/base";
import YouTubeIcon from '@mui/icons-material/YouTube';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    backgroundColor: "#2e3b55",
    color: "#fff",
    borderRadius: "10px",
    padding: 3,
    display: "flex",
    alignItems: "center",
};

const MovieModal = ({ open, setOpen }) => {
    const [movieDetail, setMovieDetail] = useState(null);
    const [loading, setLoading] = useState(false);
    const [trailer, setTrailer] = useState(null);
    const [cast, setCast] = useState([]);

    const getMovieDetails = async () => {
        if (!open) return;
        setLoading(true);
        try {
            const data = await moviePageApi.getMovieById(open.id); 
            setMovieDetail(data);
        } catch (error) {
            console.error("Failed to fetch movie details", error);
        } finally {
            setLoading(false);
        }
    };

    const getMovieCast = async () => {
        if (!open) return;
        try {
            const data = await moviePageApi.getMovieCast(open.id);
            setCast(data.cast || []);
        } catch (error) {
            console.error("Error fetching cast:", error);
        }
    };

    const getTrailer = async () => {
        if (!open) return;
        try {
            const data = await moviePageApi.getTrailer(open.id);
            const trailer = data.results[0];
            setTrailer(trailer || null);
        } catch (error) {
            console.error("Error fetching trailer:", error);
        }
    };

    useEffect(() => {
        if (open) {
            getMovieDetails();
            getMovieCast();
            getTrailer();
        }
    }, [open]);

    const handleClose = () => {
        setOpen(false);
    };

    const handleDragStart = (e) => e.preventDefault();

    return (
        <Modal open={Boolean(open)} onClose={handleClose}>
            <Box sx={{ ...style }}>
                {loading || !movieDetail ? (
                    <LinearProgress />
                ) : (
                    <>
                        <img
                            src={imageURL + movieDetail.poster_path}
                            alt={movieDetail.original_title}
                            width={200}
                            style={{ objectFit: "contain", marginRight: 20 }}
                        />
                        <Stack gap={2}>
                            <Typography variant="h4">{movieDetail.original_title}</Typography>
                            <Box
                                sx={{
                                    boxShadow: "inset 0 0 5px #000",
                                    borderRadius: 8,
                                    p: 5,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: 200,
                                    overflowY: "auto",
                                }}
                            >
                                {movieDetail.overview}
                            </Box>
                            <Box width={500}>
                                <AliceCarousel
                                    infinite
                                    autoPlay
                                    disableDotsControls
                                    mouseTracking
                                    disableButtonsControls
                                    responsive={{
                                        0: {
                                            items: 5,
                                        },
                                    }}
                                    items={cast.map((actor) => (
                                        <Box
                                            key={actor.cast_id}
                                            display="flex"
                                            flexDirection="column"
                                        >
                                            <img
                                                src={imageURL + actor.profile_path}
                                                alt={actor.name}
                                                width={70}
                                                onDragStart={handleDragStart}
                                                role="presentation"
                                            />
                                            <Typography variant="p">{actor.name}</Typography>
                                        </Box>
                                    ))}
                                />
                            </Box>
                            {trailer && trailer.site === "YouTube" && (
                                <Button
                                    startIcon={<YouTubeIcon />}
                                    variant="contained"
                                    color="error"
                                    href={`https://www.youtube.com/watch?v=${trailer.key}`}
                                >
                                    Watch Trailer
                                </Button>
                            )}
                        </Stack>
                    </>
                )}
            </Box>
        </Modal>
    );
};
export default MovieModal;
