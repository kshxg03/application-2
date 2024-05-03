import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Bislerium Pvt. Ltd.</div>
      <div className={styles.linkSection}>
        <div>Pages</div>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/blogs">Blogs</Link>
        </div>
      </div>
      <div className={styles.text}>copyright@Bislerium2024</div>
    </div>
  );
};

export default Footer;
