import Link from "next/link";
import styles from "./Header.module.css";
import Button from "./Button";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          挫折エピソード共有メディア
        </Link>
        <nav className={styles.nav}>
          <Button href="https://forms.gle/2VvKBzg1YsEhvMWUA" variant="primary">エピソードを共有</Button>
        </nav>
      </div>
    </header>
  );
}
