import Header from '../components/Header';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import sample1 from '../public/images/music-player.png';


export default function FirstPost() {
  return (
    <>
    <Head>
      <title>Ea Francisco | Portfolio</title>
      <meta name="portfolio" content="The creative portfolio of Ea Francisco, web designer" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" />
    </Head>

    
      <main className={styles.main}>
    <Header />
      <h1>My Portfolio</h1>

      <div classname={styles.samples}>
        <div className={styles.card}>
            <h3>Music Player</h3>
            <Image
              src={sample1}
              alt="Music Player Perview"
              height={400}
              width={600} />
            <p>A simple music player app made with vanilla Javascript</p>
            <button className={styles.button}>
              <Link href="/posts/first-post">Live Demo</Link></button>
        </div>

      </div>

      
    </main>
    </>
  )
}