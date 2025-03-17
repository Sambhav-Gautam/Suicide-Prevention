import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Disclaimer() {
  return (
    <Container sx={{ mt: 4, mb: 4, p: 3 }}>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          backgroundColor: "#ffffff",
          borderRadius: 2
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#3f51b5", textAlign: "center" }}
        >
          Disclaimer
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ fontSize: "1.1rem", color: "#424242" }}
        >
          The information provided on this website is for informational purposes only. It is <strong>not a substitute</strong> for professional medical advice, diagnosis, or treatment. Always consult your mental health professional with any questions or concerns.
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{ fontSize: "1.1rem", color: "#d32f2f", fontStyle: "italic" }}
        >
          In an emergency, please call your local emergency services immediately.
        </Typography>
        <Typography
          variant="caption"
          display="block"
          sx={{
            mt: 2,
            fontStyle: "italic",
            color: "#6d4c41",
            textAlign: "center"
          }}
        >
          Sources:
          <Link
            href="https://www.nimh.nih.gov/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontWeight: "bold", color: "#3f51b5", ml: 1 }}
          >
            NIMH
          </Link>
          ,
          <Link
            href="https://988lifeline.org/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontWeight: "bold", color: "#3f51b5", ml: 1 }}
          >
            988 Lifeline
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
}

export default Disclaimer;
