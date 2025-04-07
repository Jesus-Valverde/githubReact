import { Outlet, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box, Container } from "@mui/material";
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          width: "100vw", 
          bgcolor: "grey.900"
        }}
      >
        <Toolbar>

          <Typography 
            variant="h6" 
            sx={{ 
              flexGrow: 0, 
              textDecoration: "none", 
              color: "white", 
              fontWeight: 700 
            }}
          >
            MyApp
          </Typography>
          <Box>
            <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
            <Button color="inherit" onClick={() => navigate("/about")}>About</Button>
            <Button color="inherit" onClick={() => navigate("/contact")}>Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: "64px", padding: "20px" }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Header;