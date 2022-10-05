import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import CartWidget from "../Cart/CartWidget";
import { Link } from "react-router-dom";

const pages = [
  { enlace: "/category/Notebook", nombre: "Notebook" },
  { enlace: "/category/Monitores", nombre: "Monitores" },
  { enlace: "/category/Teclados", nombre: "Teclados" },
];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      style={{
        height: "8rem",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "nome" }, mr: 1 }} />
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h4"
              noWrap
              sx={{
                mr: "10rem",
                display: { xs: "none", md: "flex" },
                fontFamily: "BlinkMacSystemFont",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
              }}
            >
              COMPU MUNDO
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Link
                    to={page.enlace}
                    style={{ textDecoration: "none", color: `black` }}
                  >
                    {page.nombre}{" "}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>    
          <Link to="/" style={{ textDecoration: "none" }}></Link>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "BlinkMacSystemFont",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            COMPU MUNDO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <MenuItem key={index} onClick={handleCloseNavMenu}>
                <Link
                  to={page.enlace}
                  style={{ textDecoration: "none", color: `bisque` }}
                >
                  {page.nombre}{" "}
                </Link>
              </MenuItem>
            ))}
          </Box>
          <Box sx={{ ml: "1rem" }}>
            <CartWidget />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
