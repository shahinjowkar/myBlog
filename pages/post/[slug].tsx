import React from 'react';
import Header from '../../components/Header'
import {sanityClient, urlFor} from '../../sanity'
import {Post} from '../../typing'
import {GetStaticProps} from "next";
import { Context } from 'vm';
import PortableText from "react-portable-text"
import {useFormik} from 'formik'
import CommentForm from '../../components/CommentForm'

interface props {
    post : Post;
}

interface IFormInput{
    //to make it optional add a question makrk before it
    _id:string;
    name:string;
    email:string;
    comment:string;
}
export default function post({post}:props){
    
    return (
        <main>
            <Header />
            <img 
            className="w-full h-40 object-cover"
            src={urlFor(post.mainImage).url()}
            alt=""/>
            <article className="max-w-3xl mx-auto p-5">
                <h1 className="text-3xl mt-10 mb-3 ">{post.title}</h1>
                <h2 className="text-xl font-light text-gray-500 mb-2">{post.description}</h2>
            
            <div className="flex items-center space-x-2">
                <img
                className="h-10 w-10 rounded-full"
                src={urlFor(post.author.image).url()}/>
                <p className="font-extralight text-sm items-center ">
                   Blog post By <span className="text-green-600">{post.author.name} </span>- published at 
                </p>
            </div>
            <div>
                <PortableText 
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                content={post.body}
                serializers={
                    {
                        h1: (props:any) =>(<h1 className='text-2xl font-bold my-5' {...props} />),
                        h2: (props:any) =>(<h1 className='text-xl font-bold my-5' {...props} />),
                        li: ({children}:any) =>(<li className='ml-4 list-disc'>{children}</li>),
                        link: ({href, children}:any) => (<a href={href} className="text-blue-500 hover:underlune">{children}</a>)
                    }
                   }
                />
            </div>
            </article>
            <hr className="max-w-lg my-5 mx-auto border border-yellow-500"/>
            <CommentForm id={post._id} />

        </main>
    );
};

export const getStaticPaths = async () =>  {
    
    const query = `*[_type == "posts"]{
         _id, 
        slug {
            current
        }
     }
    `;
     const posts = await sanityClient.fetch(query);
     const paths = posts.map( (post : Post ) => ({param : {slug : post.slug.current}}));
     return{
        paths,
        fallback: "blocking",
     }

}
// what is this param : context 
export const getStaticProps : GetStaticProps = async ({params} :Context ) =>{
    const query= `*[_type == 'post' && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        author -> {
            name,
            image
        },
        description,
        mainImage,
        slug,
        body
    }`
    const post = await sanityClient.fetch(query, {slug: params?.slug,})
    return{
        props : { post, },
        revalidate: 60// to update it
    }
}
