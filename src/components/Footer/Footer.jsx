import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";
import { List, ListItem } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.dark",
        py: 3,
        px: 2,
        mt: "10rem",
        boxShadow: 2,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
            my: 5,
          }}
        >
          <List
            sx={{
              color: "white",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 2, sm: 15 },
              listStyle: "none",
              padding: 0,
              margin: 0,
              alignItems: { xs: "center", sm: "flex-start" },
            }}
          >
            <ListItem sx={{ padding: 0 }}>
              <Link sx={{ color: "white" }} href="/">
                Home
              </Link>
            </ListItem>
            <ListItem sx={{ padding: 0 }}>
              <Link sx={{ color: "white" }} href="/about">
                About
              </Link>
            </ListItem>
            <ListItem sx={{ padding: 0 }}>
              <Link sx={{ color: "white" }} href="/contact">
                Contact
              </Link>
            </ListItem>
          </List>
        </Box>

        <Typography variant="body2" color="white" align="center">
          {"© "}Maerrc {new Date().getFullYear()}
          {". All rights reserved."}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
