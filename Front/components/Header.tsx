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
          <Button href="#" sx={{ color: "black", backgroundColor: "white" }}>
            {" "}
            my portfolio
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
// <div className="max-w-7xl mx-auto ">
//   <header className="flex justify-between p-5 max-w-7xl mx-auto">
//     <div className=" flex items-center space-x-5">
//       <Link href="">
//         <img
//           className="w-44 object-contain cursor-pointer"
//           src="https://links.papareact.com/yvf"
//           alt=""
//         />
//       </Link>

//       <div className="hidden md:inline-flex items-center space-x-5">
//         <h3> About</h3>
//         <h3>contact</h3>
//         <h3 className="text-white bg-green-600 px-5 py-1 rounded-full">
//           follow
//         </h3>
//       </div>
//     </div>
//     <div className="flex items-center space-x-5 text-green-600">
//       <h3>Saign in</h3>
//       <h3 className="border px-4 py-1 rounded-full border-green-600">
//         Get Started
//       </h3>
//     </div>
//     {/*post*/}
//   </header>
// </div>

export default Header;
