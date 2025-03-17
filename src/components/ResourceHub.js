import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';

function ResourceHub() {
  const resources = [
    { name: "National Institute of Mental Health (NIMH)", url: "https://www.nimh.nih.gov/" },
    { name: "National Suicide Prevention Lifeline (988)", url: "https://988lifeline.org/" },
    { name: "SAMHSA", url: "https://www.samhsa.gov/" },
    { name: "Mental Health America (MHA)", url: "https://www.mhanational.org/" },
    { name: "National Alliance on Mental Illness (NAMI)", url: "https://www.nami.org/" }
  ];

  return (
    <Container
      sx={{
        mt: 4,
        p: 3,
        backgroundColor: "#ffffff",
        borderRadius: 2,
        boxShadow: "0px 2px 8px rgba(0,0,0,0.1)"
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#3f51b5", textAlign: "center" }}
      >
        Helpful Resources
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ fontStyle: "italic", color: "#666666", textAlign: "center", mb: 2 }}
      >
        Trusted resources to support your mental health journey.
      </Typography>
      <List>
        {resources.map((resource, index) => (
          <ListItem key={index} sx={{ mb: 1 }}>
            <Link
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                width: "100%",
                p: 1,
                borderRadius: 1,
                fontSize: "1.1rem",
                fontWeight: "bold",
                color: "#3f51b5",
                backgroundColor: "#e8eaf6",
                transition: "background-color 0.3s ease, transform 0.3s ease",
                "&:hover": {
                  backgroundColor: "#c5cae9",
                  transform: "scale(1.02)"
                }
              }}
            >
              <ListItemText primary={resource.name} primaryTypographyProps={{ fontStyle: "italic" }} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default ResourceHub;
