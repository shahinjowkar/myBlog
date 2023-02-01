import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Box, Button, Hidden, Icon, Typography } from "@mui/material";

import { Container } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

const layer1 = " #121212";
const layer2 = "#1e1e1e";
const layer3 = "#272727";
function Header() {
  //TODO FOLLOW DOCS TO ADD WHITE ON TOP FOR SHADOWS
  return (
    <Container maxWidth={false} sx={{ bgcolor: layer3, m: 0, p: 0 }}>
      <Box
        height={"80px"}
        sx={{
          maxWidth: "900px",
          minWidth: "375px",
          m: "auto",
          px: "20px",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        MyBlog
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          <GitHubIcon href="#" sx={{ color: "white" }}></GitHubIcon>
          <LinkedInIcon href="#" sx={{ color: "white" }}></LinkedInIcon>
          <Button
            href="/GenPost"
            sx={{ color: "black", backgroundColor: "white" }}
          >
            {" "}
            Auto Generate
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Header;
