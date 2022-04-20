import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Header() {
    return (
      <header className={styles.main}>
          <h1 className="title">
            <Link href="/">
              <a>Home</a>
            </Link>
            {' '}
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
          </h1>
  
          
        </header>
    )
  }
  