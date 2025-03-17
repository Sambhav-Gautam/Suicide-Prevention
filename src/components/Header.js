import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

function Header({ onOpenMoodBooster }) {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#3f51b5",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.3)",
        py: 1
      }}
    >
      <Toolbar>
        <Typography
          variant="h5"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            fontStyle: "italic",
            color: "#ffffff",
            fontSize: { xs: "1.2rem", md: "1.5rem" }
          }}
        >
          Mental Health Support
        </Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={onOpenMoodBooster} 
          sx={{
            mr: 2,
            fontWeight: "bold",
            fontSize: "1rem",
            textTransform: "none"
          }}
        >
          Mood Booster
        </Button>
        <Typography
          variant="h6"
          component="div"
          sx={{
            mr: 2,
            fontWeight: "bold",
            color: "#ffeb3b",
            fontSize: { xs: "0.9rem", md: "1rem" }
          }}
        >
          Crisis Hotline:{" "}
          <Link
            color="inherit"
            href="tel:988"
            sx={{ fontStyle: "italic", fontWeight: "bold" }}
          >
            988
          </Link>
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "#ffeb3b",
            fontSize: { xs: "0.9rem", md: "1rem" }
          }}
        >
          Emergency:{" "}
          <Link
            color="inherit"
            href="tel:911"
            sx={{ fontStyle: "italic", fontWeight: "bold" }}
          >
            911
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
