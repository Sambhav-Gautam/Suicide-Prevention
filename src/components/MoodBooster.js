import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography
} from '@mui/material';
import Confetti from 'react-confetti';
import Fade from '@mui/material/Fade';
import { keyframes } from '@emotion/react';

const quotes = [
  "You are stronger than you think.",
  "Every day is a new beginning.",
  "Take a deep breath, and let it go.",
  "This moment is temporary, and you will overcome it.",
  "Believe in yourself; you have the power to change your story.",
  "Your journey is unique and filled with possibilities.",
  "You deserve happiness and peace.",
  "Smile, because you matter.",
  "Embrace your inner light and let it shine.",
  "Every challenge is an opportunity to grow.",
  "Hope is the light that guides you through darkness.",
  "Your strength is greater than any struggle.",
  "Keep moving forward, one step at a time.",
  "You are not alone; support is always near.",
  "Your potential is limitless, believe in it.",
  "Every setback is a setup for a greater comeback."
];

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

function MoodBooster({ open, onClose }) {
  const [quote, setQuote] = useState("");
  const [confettiTrigger, setConfettiTrigger] = useState(0);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // Update dimensions on window resize.
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set a new quote and trigger confetti when the Mood Booster opens.
  useEffect(() => {
    if (open) {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
      setConfettiTrigger(prev => prev + 1);
    }
  }, [open]);

  const handleNext = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    setConfettiTrigger(prev => prev + 1);
  };

  const handleClose = () => {
    if (onClose) onClose();
  };

  return (
    <>
      {open && (
        <Confetti
          key={confettiTrigger}
          width={dimensions.width}
          height={dimensions.height}
          numberOfPieces={500}
          recycle={false}
          gravity={0.2}
          wind={0.05}
          colors={[
            "#ff5252",
            "#ff4081",
            "#e040fb",
            "#7c4dff",
            "#536dfe",
            "#448aff"
          ]}
        />
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        transitionDuration={600}
        PaperProps={{
          sx: {
            p: 3,
            background: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)',
            overflow: 'hidden',
            borderRadius: 2
          }
        }}
      >
        <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold', color: "#3f51b5" }}>
          Mood Booster
        </DialogTitle>
        <DialogContent sx={{ overflow: 'hidden' }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              mb: 2,
              color: '#3f51b5',
              animation: `${pulse} 2s infinite`
            }}
          >
            {quote}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              mb: 2,
              animation: `${bounce} 2s infinite`
            }}
          >
            🤗
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block" textAlign="center">
            *This feature is designed as a momentary distraction and is not a substitute for professional help.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button onClick={handleNext} color="primary" variant="contained" sx={{ fontWeight: "bold" }}>
            Next
          </Button>
          <Button onClick={handleClose} color="secondary" variant="outlined" sx={{ fontWeight: "bold" }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default MoodBooster;
