import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © {year} MeuSite. Todos os direitos reservados.
        </p>
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/contato" className={styles.link}>
            Contato
          </Link>
          <Link href="/sobre" className={styles.link}>
            Sobre
          </Link>
        </nav>
      </div>
    </footer>
  );
}
