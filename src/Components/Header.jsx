import { Paper } from "@mui/material";

const Header = () => {
    return (
        <Paper 
        elevation={2}
        sx={{
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 3,
        }}
        >
            Movie Hub
        </Paper>
    )
}

export default Header;