import { server } from '../config'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../components/Card';
import Footer from '../components/Footer';
import "@fontsource/noto-sans"
import "@fontsource/outfit/800.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zerlog</title>
        <meta name='keywords' content='discussion, debate, forum'/>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6336001957803262"
     crossorigin="anonymous"></script>
      </Head>
      <h1 className={styles.title}>Welcome to Zerlog...</h1>
    </div>
  )
}

export const getStaticProps = async() => {
  const res = await fetch(`${server}/api/posts`);
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  }
}