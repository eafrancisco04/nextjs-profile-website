import styles from '../styles/Home.module.css';
import Image from 'next/image';
import logo from '../public/images/logo.svg'
import Link from 'next/link';

export default function Header() {
    return (
      <header className={styles.header}>
            <Image src={logo}
              height={100}
              width={100} 
              alt="Ea Francisco Logo"/>
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

        </header>

        
    )
  }
  