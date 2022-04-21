import Header from '../components/Header';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { SiAdobephotoshop, SiAdobeaftereffects, SiAdobeillustrator, SiAdobexd, SiJavascript, SiNodedotjs } from 'react-icons/si';
import { AiFillHtml5, AiFillGithub, AiFillInstagram, AiFillBehanceCircle } from 'react-icons/ai';
import { DiCss3, DiReact } from 'react-icons/di';
import { BsBootstrapFill, BsLinkedin } from 'react-icons/bs';


export default function Resume() {
  return (
    <>
    <Head>
      <title>Ea Francisco | Resume</title>
      <meta name="portfolio" content="The creative portfolio of Ea Francisco, web designer" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" />
    </Head>

    
        <main className={styles.main}>
    <Header />
      <h1>My Resume</h1>

      <div className={styles.resume}>
          <div className={styles.work}>
              <h2 className={styles.titlecard}>Work Experience</h2>
              <div className={styles.card2}>
                  <h2 className={styles.heading}>Podmaster</h2>
                  <h3 className={styles.subheading}>Valher Media</h3>
                  <h5 className={styles.date}>April 2021 - October 2021</h5>
                  <p className={styles.descr}>Led a team to successfully launch multiple podcasts from branding to website launch.</p>
              </div>
              
              <div className={styles.card2}>
                  <h2 className={styles.heading}>Content Writer</h2>
                  <h3 className={styles.subheading}>M Square Media</h3>
                  <h5 className={styles.date}>July 2019 - Oct 2020</h5>
                  <p className={styles.descr}>Rebranded clients' websites and created written content.</p>
              </div>

              <div className={styles.card2}>
                  <h2 className={styles.heading}>Freelance Content Manager</h2>
                  <h3 className={styles.subheading}>Self-Employed</h3>
                  <h5 className={styles.date}>Feb 2018 - Present</h5>
                  <p className={styles.descr}>Assist clients in creating their brand and manage their online platforms.</p>
              </div>

              <div className={styles.card2}>
                  <h2 className={styles.heading}>Editorial Assistant</h2>
                  <h3 className={styles.subheading}>Hinge Inquirer</h3>
                  <h5 className={styles.date}>March 2017 - March 2018</h5>
                  <p className={styles.descr}>Managed and created content for Multisport.ph.</p>
              </div>

          </div>

      </div>
        <div className={styles.resume}>
          <div className={styles.work}>
              <h2 className={styles.titlecard}>Work Experience</h2>
              <div className={styles.card2}>
                  <h2 className={styles.heading}>Podmaster</h2>
                  <h3 className={styles.subheading}>Valher Media</h3>
                  <h5 className={styles.date}>April 2021 - October 2021</h5>
                  <p className={styles.descr}>Led a team to successfully launch multiple podcasts from branding to website launch.</p>
              </div>
              
              <div className={styles.card2}>
                  <h2 className={styles.heading}>Content Writer</h2>
                  <h3 className={styles.subheading}>M Square Media</h3>
                  <h5 className={styles.date}>July 2019 - Oct 2020</h5>
                  <p className={styles.descr}>Rebranded clients' websites and created written content.</p>
              </div>

              <div className={styles.card2}>
                  <h2 className={styles.heading}>Freelance Content Manager</h2>
                  <h3 className={styles.subheading}>Self-Employed</h3>
                  <h5 className={styles.date}>Feb 2018 - Present</h5>
                  <p className={styles.descr}>Assist clients in creating their brand and manage their online platforms.</p>
              </div>

              <div className={styles.card2}>
                  <h2 className={styles.heading}>Editorial Assistant</h2>
                  <h3 className={styles.subheading}>Hinge Inquirer</h3>
                  <h5 className={styles.date}>March 2017 - March 2018</h5>
                  <p className={styles.descr}>Managed and created content for Multisport.ph.</p>
              </div>

          </div>


          <div className={styles.school}>
              <h2 className={styles.titlecard}>Education</h2>
              <div className={styles.card2}>
                  <h2 className={styles.heading}>Humber College</h2>
                  <h3 className={styles.subheading}>Toronto, Canada</h3>
                  <h5 className={styles.date}>2021 - 2022</h5>
                  <p className={styles.descr}>Web Design and Development  Certificate of Achievement</p>
              </div>
              
              <div className={styles.card2}>
                  <h2 className={styles.heading}>De La Salle University</h2>
                  <h3 className={styles.subheading}>Manila, Philippines</h3>
                  <h5 className={styles.date}>2013 - 2016</h5>
                  <p className={styles.descr}>Bachelor of Arts in International Studies, Major in European Studies</p>
              </div>

          </div>

          <div className={styles.skills}>
            <h2>My Skills</h2>
            <div>
              <h2>Design</h2>
              <span>
                <SiAdobephotoshop size={70}/>{' '} 
                <SiAdobeaftereffects size={70}/>{' '}
                <SiAdobeillustrator size={70}/>{' '} 
                <SiAdobexd size={70}/>
              </span>

              <h2>Developer</h2>
              <span>
                <SiJavascript size={70}/>
                <AiFillHtml5 size={70}/>
                <DiCss3 size={70}/>
                <DiReact size={70}/>
                <BsBootstrapFill size={70} />
                <SiNodedotjs size={70} />
              </span>
            </div>

          </div>

      </div>


    
      
      
    </main>
    </>
  )
}