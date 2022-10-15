// import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Body from '../components/Body'
import {sanityClient , urlFor} from '../sanity'
import {Post} from "../typing"
interface Props{
  posts: [Post]
}
export default function Home({posts} : Props) {
  console.log(posts)
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
     </Head>
     <Header/>
     <Body/>
      
      {/* <h1>this is midium 2.0</h1> */}
    </div>
  )
}

 
export const getServerSideProps=async () => {
  //check how you did it in the demo project 
  const query =`*[_type == "post"]{
    _id,
    title,
    author->{
    image,
    name
  },
  description,
  mainImage,
  slug
}`
  const posts=await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  }
}