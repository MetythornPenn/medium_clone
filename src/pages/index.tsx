/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '../../components/Header'
// import { sanityClient, urlFor } from '../sanity'
// import sanityClient from '../sanity'



const inter = Inter({ subsets: ['latin'] })

// interface Props {
//   posts: [Post];
// }

export default function Home() {
  // console.log(posts);
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ctrl + Space : to import component autometically */}
      <Header />
      <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-1- lg:py-10">
        <div className="px-10 space-y-5">
          <h1 className='text-6xl max-w-xl font-serif'>
            <span className='underline decoration-black decoration-3'>
              Medium
            </span>{"  "}
            is a place to write, read, and connect
          </h1>
          <h2>
            It is easy and free to post your thinking on any topic and connect with millions of readers.
          </h2>
        </div>

        <img
          className="hidden md:inline-flex h-32 lg:h-full "
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
          alt=""
        />
      </div>
      {/* Post */}


    </div>
  )
}

// export const getServerSideProps = async () => {

// export const getServerSideProps = async () => {
//   const query = `*[_type == "post"]{
//     _id, 
//     title,
//     author-> {
//       name,
//       image,
//     },
//     description,
//     mainImage,
//     slug
//   }`;

//   const posts = await sanityClient.fetch(query);
//   return {
//     props: {
//       posts,
//     },
//   };
// };

// get query from sanity query url 
// https://www.sanity.io/docs/query-builder


// export const getStaticProps = async () => {
//   const query = `*[_type == "post"]{
//     _id, 
//     title,
//     author-> {
//       name,
//       image,
//     },
//     description,
//     mainImage,
//     slug
//   }`;

//   const posts = await sanityClient.fetch(query);
//   return {
//     props: {
//       posts,
//     },
//   };
// };














