import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Meu título</h1>
        <p className={styles.paragrafo}>adfadsfds</p>
        <Image src='/image.png' width={300} height={300} alt="IFRO" />
      </main>
    </div>
  );
}