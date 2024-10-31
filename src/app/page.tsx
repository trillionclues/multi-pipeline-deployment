import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />{" "}
        <div className={styles.ctas}>
          <a className={styles.primary} target="_blank">
            This is the Develop Branch
          </a>
        </div>
      </main>
    </div>
  );
}
