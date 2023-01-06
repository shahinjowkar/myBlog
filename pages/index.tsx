// import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Body from '../components/Body'
import {sanityClient , urlFor} from '../sanity'
import {Post} from "../typing"
import Link from "next/link";
import { async } from 'rxjs'
export  interface Props{
  posts: [Post]
}
export default function Home({posts} : Props) {
  // console.log(posts)
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
     </Head>
     <Header/>
     <Body/>
     <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-6 md:gap-6 p-2">
        {posts.map((post) =>  
        <Link key={post._id} href={`/post/${post.slug.current}`}>
          <div className='border rounded-lg group cursor-pointer overflow-hidden'>
            <img 
            className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out'
            src={urlFor(post.mainImage).url()!} alt=""/>
            <div className="flex justify-between p-5 bg-white ">
             <div>
              <p className="text-lg font-bold">{post.title}</p>
              <p className="text-xs"> {`${post.description} by ${post.author.name}`} </p>
             </div>
              <img 
                className="h-12 w-12 rounded-full"
                src = {urlFor(post.author.image).url()!} 
                alt=""/>
            </div>
          </div>
        </Link>
        )}
     </div>
      
      {/* <h1>this is midium 2.0</h1> */}
    </div>
  )
}

 //SSR
export async function getServerSideProps() {
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