'use client'; // diretiva use client
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image'; // imagens next
import { useState } from 'react'; // estado

export default function Header() {
    const [menu, setMenu] = useState('/icons/closed.png');
    return (
        <div className={styles.divHeader}>
            <button className={styles.btn}>
                <Image src={menu} width={30} height={30} alt='menu' />
            </button>
            <header className={styles.header}>
                <nav>
                    <ul>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/contato'>Contato</Link></li>
                        <li><Link href='/sobre'>Sobre</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}