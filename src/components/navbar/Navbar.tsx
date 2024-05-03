import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import DynamicLinks from "./dynamicLinks/DynamicLinks";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">Bislerium</Link>
      </div>
      <div>
        <Links />
      </div>
      <div>
        <DynamicLinks />
      </div>
    </div>
  );
};

export default Navbar;
