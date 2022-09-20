import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PostList from '../components/PostList'
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zerlog</title>
        <meta name='keywords' content='discussion, debate, forum'/>
      </Head>
      <Header/>
      <Card/>
      <h1>hello</h1>
    </div>
  )
}
