import Header from '../components/Header';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/Image';

import { SiAdobephotoshop, SiAdobeaftereffects, SiAdobeillustrator, SiAdobexd, SiJavascript, SiNodedotjs } from 'react-icons/si';
import { AiFillHtml5, AiFillGithub, AiFillInstagram, AiFillBehanceCircle } from 'react-icons/ai';
import { DiCss3, DiReact } from 'react-icons/di';
import { BsBootstrapFill, BsLinkedin } from 'react-icons/bs';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ea Francisco | Freelancer</title>
        <meta name="description" content="The creative portfolio of Ea Francisco, web designer" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" />

        
      </Head>

      <main className={styles.main}>
      
      <Header />
       
        <div>
          <div className={styles.cover}>
            <h1 className={styles.title}>Ea Francisco</h1>
            <h2>Freelance Web Designer | Content Manager</h2>
            <Link href="/portfolio"><div type="button" className={styles.button}>
              My Portfolio
            </div></Link>
            <Link href="/resume"><div type="button"className={styles.button}>My Resume</div></Link>

          </div>
    
          <div className={styles.intro}>
            <h3>I am a Filipino freelance web designer based in Toronto.</h3>
            <p>I worked for over 4 years as a content creator and manager. I have helped clients form all around the world to create their brand, start their website, and increase their social media following.
            With my experience, I can build you creative and functional websites that matches your brand identity.
            </p>
            <p>Experimenting with design has become my new passion, and I am continuously advancing my skills and learning new tricks to give cleints a unique experience.
            </p>
            <p>
              Want to know about me? Check out my resume or go to my social media!
            </p>
            <span>
              <Link href="https://github.com/eafrancisco04">
                <AiFillGithub size={70}/>
              </Link>
              <AiFillInstagram size={70}/>
              <AiFillBehanceCircle size={70}/>
              <BsLinkedin size={70}/>
            </span>
          </div>


          <div className={styles.contact}>
            <h2>Get in Touch</h2>
            <form className={styles.form}>
                <div className={styles.input}>
                  <label>Name: </label>
                  <input type="text" className={styles.input} placeholder="Your Name"/>
                </div>

                <div className={styles.input}>
                  <label>Email: </label>
                  <input type="text" className={styles.input} placeholder="Your Email"/>
                </div>

                <div className={styles.input}>
                  <label>Contact Number: </label>
                  <input type="text" className={styles.input} placeholder="Your Number" />
                </div>

                <div className={styles.input}>
                  <label>Message: </label>
                  <textarea className="form-control" aria-label="With textarea" placeholder="Your Message"></textarea>
                </div>

                <button type="submit" className={styles.button}>Send</button>
                </form>
            </div>
        </div>

      <footer className={styles.footer}>
        <small className={styles.footer}>2022 Ea Francisco © All Rights Reserved. </small>
      </footer>
        
      </main>

    </div>
  )
}

