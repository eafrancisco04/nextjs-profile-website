import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Header() {
    return (
      <header className={styles.header}>
            <Link href="/">
              <h3>Home</h3>
            </Link>
            {' '}
            <Link href="/resume">
              <h3>Resume</h3>
            </Link>
            {' '}
            <Link href="/portfolio">
              <h3>Portfolio</h3>
            </Link>
  
          {/* <small className={styles.footer}>2022 Ea Francisco © All Rights Reserved. </small> */}
        </header>

        
    )
  }
  