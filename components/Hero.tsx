import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import {
  Box,
  Button,
  Hidden,
  Icon,
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";

import { Container } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import { Translate } from "@mui/icons-material";
import imageUrl from "../public/mainHero.jpg";

const layer1 = " #121212";
const layer2 = "#1e1e1e";
const layer3 = "#272727";
let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Hero() {
  //link component is a next component which prefetch klinked lists and make te website faster
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        height: {
          xs: 300,
          md: 450,
          xl: 550,
        },
        pl: "6%",
        backgroundImage: `url(${imageUrl.src})`,
        backgroundSize: "cover",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundPosition: "bottom right",
        filter: "color(0)",
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography
          component={"h2"}
          variant="h2"
          color={"white"}
          bgcolor={"rgba(0, 0, 0, 0.8)"}
          padding={1.5}
          sx={{ whiteSpace: "nowrap" }}
        >
          Welcome to my Blog
        </Typography>
        <Typography
          component={"h6"}
          variant="h6"
          color={"white"}
          bgcolor={"rgba(0, 0, 0, 0.8)"}
          padding={1.5}
          sx={{ fontSize: "1em", whiteSpace: "nowrap" }}
        >
          The Journey,not the Destination
        </Typography>
      </ThemeProvider>
    </Box>
  );
}
