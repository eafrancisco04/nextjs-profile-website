import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Header() {
    return (
      <header className={styles.header}>
            <Link href="/">
              <h2>Home</h2>
            </Link>
            {' '}
            <Link href="/resume">
              <h2>Resume</h2>
            </Link>
            {' '}
            <Link href="/portfolio">
              <h2>Portfolio</h2>
            </Link>
  
          {/* <small className={styles.footer}>2022 Ea Francisco © All Rights Reserved. </small> */}
        </header>

        
    )
  }
  