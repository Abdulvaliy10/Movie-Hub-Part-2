import { Paper } from "@mui/material";

const Header = () => {
    return (
        <Paper 
        elevation={2}
        sx={{
        height: 100,
        width: "100%",
        marginBottom: "10px",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 3,
        backgroundColor: '#39445a',
        fontSize: "50px",
        fontFamily: "Montserrat",
        boxShadow: "0 8px 8px rgba(0, 0, 0, 0.2)"
        }}
        >
            Movie Hub
        </Paper>
    )
}

export default Header;