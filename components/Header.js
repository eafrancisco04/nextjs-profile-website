import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Header() {
    return (
      <header className={styles.header}>
          <h2 className="title">
            <Link href="/">
              <a>Home</a>
            </Link>
            {' '}
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
          </h2>
  
          
        </header>
    )
  }
  