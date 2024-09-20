
import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        background: {
            default: "#222222",
            paper: "#121212",
        },
        text: {
            primary: "#FFFFFF",
        }
    },
    typography: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
});

export default theme;