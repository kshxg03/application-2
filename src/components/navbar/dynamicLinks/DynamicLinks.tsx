import Link from "next/link";
import styles from "./dynamicLinks.module.css";

const DynamicLinks = () => {
  // TEMPORARY STATE
  const sessionExists = false;
  const isAdmin = false;

  return (
    <div className={styles.links}>
      {sessionExists ? (
        isAdmin ? (
          <Link href="/admin">
            <button className={styles.user}>Admin</button>
          </Link>
        ) : (
          <>
            <Link href="#">
              <button className={styles.icon_link}>+</button>
            </Link>
            <Link href="#">
              <button className={styles.icon_link}>N</button>
            </Link>
            <Link href="/account">
              <button className={styles.user}>My Account</button>
            </Link>
          </>
        )
      ) : (
        <Link href="/login">
          <button className={styles.login}>Sign in</button>
        </Link>
      )}
    </div>
  );
};

export default DynamicLinks;
