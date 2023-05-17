import { Box, Button, Container, Typography } from "@mui/material";

import Header from "../components/Header";
import soorena from "../public/soorena.jpeg";
import { useState } from "react";

export default function Info() {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <Header></Header>
      <Container
        maxWidth={false}
        sx={{ bgcolor: "black", m: 0, p: 0, height: "100vh" }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "65%",
              width: "80%",
              display: "flex",
              border: 1,
              borderBlockColor: "white",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "center",
                Width: "700px",
                maxWidth: "700px",
              }}
            >
              <Typography
                color={"white"}
                variant={"h5"}
                fontFamily={"Roboto,sans-serif"}
                fontWeight={400}
                fontSize={"1.25rem"}
                letterSpacing={"4px"}
              >
                Soorena Barmaky
              </Typography>
              <Typography
                color={"white"}
                fontSize={"2rem"}
                fontFamily={"Abril Fatface"}
                fontWeight={"400"}
                textAlign={"right"}
                variant={"h2"}
              >
                Author and Owner of Denthusiast Group
              </Typography>
              <Typography
                color={"white"}
                fontSize={"1.125rem"}
                fontFamily={"Abril Fatface"}
                variant={"body2"}
                textAlign={"justify"}
                pt={2}
              >
                {!readMore
                  ? `I have a bachelor of science (BSc) degree from University of
                Toronto, specializing in human biology. My passion in dentistry
                started when I was a kid and stepped into a dental office for
                the first time, because i found dentistry to be the perfect
                synergy of art and science. I plan to become a dentist in the
                future and provide access to oral health care to my community.`
                  : `I have a bachelor of science (BSc) degree from University of Toronto, specializing in human biology. My passion in dentistry started when I was a kid and stepped into a dental office for the first time, because i found dentistry to be the perfect synergy of art and science. I plan to become a dentist in the future and provide access to oral health care to my community.

Me and my team created this blog to spread Information about greatest and latest discoveries in the field of dentistry. using GPT-4 AI technology, we summarize research papers about state-of-the-art technologies and methods related to dentistry. All information on this blog is free to use and sources are listed in each post.`}
              </Typography>
              {/* <Button
                variant={"text"}
                sx={{
                  color: "#f1c50e",
                  mt: 5,
                }}
                onClick={() => setReadMore(!readMore)}
              >
                read more
              </Button> */}
            </Box>
            <Box
              sx={{
                // backgroundImage:""
                bgcolor: "black",
                ml: 7,
                backgroundImage: `url(${soorena.src})`,
                backgroundSize: "cover",
                justifyContent: "center",
                borderRadius: "100%",
                height: "300px",
                width: "300px",
                minWidth: "300px",
              }}
            ></Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
