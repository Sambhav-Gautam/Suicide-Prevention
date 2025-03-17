import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ResourceHub from './components/ResourceHub';
import Disclaimer from './components/Disclaimer';
import MoodBooster from './components/MoodBooster';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function App() {
  const [moodBoosterOpen, setMoodBoosterOpen] = useState(false);

  // Automatically open Mood Booster after a brief delay on first load.
  useEffect(() => {
    const timer = setTimeout(() => {
      setMoodBoosterOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const openMoodBooster = () => {
    setMoodBoosterOpen(true);
  };

  const closeMoodBooster = () => {
    setMoodBoosterOpen(false);
  };

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Header onOpenMoodBooster={openMoodBooster} />
      <Container sx={{ marginTop: 4, paddingBottom: 4 }}>
        <section>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#3f51b5",
              textAlign: "center",
              fontSize: { xs: "1.8rem", md: "2.5rem" }
            }}
          >
            Welcome
          </Typography>
          <Typography
            variant="h6"
            paragraph
            sx={{
              fontStyle: "italic",
              color: "#424242",
              textAlign: "center",
              fontSize: { xs: "1rem", md: "1.3rem" }
            }}
          >
            This website is designed as a supportive resource for mental health.
            Explore our evidence-based articles, self-help tools, and interactive
            features designed to reduce anxiety and guide you in managing your emotions.
          </Typography>
        </section>
        <ResourceHub />
        <Disclaimer />
      </Container>
      <MoodBooster open={moodBoosterOpen} onClose={closeMoodBooster} />
    </Box>
  );
}

export default App;
