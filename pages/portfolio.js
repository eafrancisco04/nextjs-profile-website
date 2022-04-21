import Header from '../components/Header';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import sample1 from '../public/images/music-player.png';
import sample2 from '../public/images/kanji-app.png';
import sample3 from '../public/images/gallery-app.png';


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
              alt="Music Player Preview"
              height={350}
              width={600} />
            <p>A simple music player app made with vanilla Javascript. Features include playing and pause music, repeating songback to start, adjusting volume, and search.</p>
            <button className={styles.button}>
              <Link href="https://eafrancisco04.github.io/music-player-project/">Live Demo</Link></button>
        </div>

        <div className={styles.card}>
            <h3>Kanji App</h3>
            <Image
              src={sample2}
              alt="Kanji App"
              height={300}
              width={600} />
            <p>A random Kanji generating website made using Javascript. The app gets the info from an API and prints out the character, writing video, and meanings.</p>
            <button className={styles.button}>
              <Link href="https://eafrancisco04.github.io/kanji-api/">Live Demo</Link></button>
        </div>

        <div className={styles.card}>
            <h3>Gallery App</h3>
            <Image
              src={sample3}
              alt="Image Gallery"
              height={300}
              width={600} />
            <p>Using firebase, our group created an image gallery that includes a login feature, image upload and download, delete image, and features for editing your profile and password.</p>
            <button className={styles.button}>
              <Link href="https://wddm120-a2.github.io/PhotoGalleryApp/gallery.html">Live Demo</Link></button>
        </div>

      </div>

      
    </main>
    </>
  )
}