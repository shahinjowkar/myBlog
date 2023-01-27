import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Fade,
  ThemeProvider,
  Typography,
  createTheme,
  gridClasses,
  responsiveFontSizes,
} from "@mui/material";
import { sanityClient, urlFor } from "../sanity";

import Body from "../components/Body";
import { Container } from "@mui/system";
// import type { NextPage } from 'next'
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "next/image";
import { Key } from "@mui/icons-material";
import Link from "next/link";
import { Post } from "../typing";
import { async } from "rxjs";
import { blue } from "@mui/material/colors";
import card from "../components/Card";
// import img from "/../public/25336.jpg";
import post from "./post/[slug]";
import { relative } from "path";
import { transform } from "typescript";

const layer1 = " #121212";
const layer2 = "#1e1e1e";
const layer3 = "#272727";
let theme = createTheme();
theme = responsiveFontSizes(theme);
export interface Props {
  posts: [Post];
}
export default function Home({ posts }: Props) {
  return (
    <>
      <Header />

      <Hero />
      <Container maxWidth={false} sx={{ m: 0, p: 0 }}>
        <Container maxWidth={"lg"}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px,1fr))",
              gap: 2,
            }}
          >
            {posts.map((post) => (
              <Card
                key={post._id}
                sx={{
                  bgcolor: `${layer2}`,
                }}
              >
                <CardActionArea
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                      "& $image": {
                        transform: "scale(1.3)",
                        // transition: "ease-in-out",
                      },
                    },
                  }}
                >
                  <Box sx={{ m: 0, p: 0, overflow: "hidden" }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={`${urlFor(post.mainImage).url()!}`}
                      alt="green iguana"
                      sx={[{ overflow: "hidden", objectFit: "cover" }]}
                    />
                  </Box>
                  <CardContent>
                    <ThemeProvider theme={theme}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        color="white"
                      >
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="white">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </ThemeProvider>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Container>
      </Container>
    </>
  );
}
// console.log(posts)
//   return (
//     <div className="max-w-7xl mx-auto">
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Header />
//       <Body />
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-6 md:gap-6 p-2">
//         {posts.map((post) => (
//           <Link key={post._id} href={`/post/${post.slug.current}`}>
//             <div className="border rounded-lg group cursor-pointer overflow-hidden">
//               <img
//                 className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
//                 src={urlFor(post.mainImage).url()!}
//                 alt=""
//               />
//               <div className="flex justify-between p-5 bg-white ">
//                 <div>
//                   <p className="text-lg font-bold">{post.title}</p>
//                   <p className="text-xs">
//                     {" "}
//                     {`${post.description} by ${post.author.name}`}{" "}
//                   </p>
//                 </div>
//                 <img
//                   className="h-12 w-12 rounded-full"
//                   src={urlFor(post.author.image).url()!}
//                   alt=""
//                 />
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//       ={" "}
//     </div>
//   );
// }

//SSR(now his page is being built onthe server first with the props we query from the cms)
export async function getServerSideProps() {
  //check how you did it in the demo project
  const query = `*[_type == "post"]{
    _id,
    title,
    author->{
    image,
    name
  },
  description,
  mainImage,
  slug
}`;
  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
}
