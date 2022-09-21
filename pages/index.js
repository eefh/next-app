import { server } from '../config'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../components/Card';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zerlog</title>
        <meta name='keywords' content='discussion, debate, forum'/>
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