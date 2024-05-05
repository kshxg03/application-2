import Link from "next/link";
import styles from "./dynamicLinks.module.css";
import Cookies from "js-cookie";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";

const DynamicLinks = () => {
  const token = Cookies.get("Token");

  const tokenExists = true;
  var isAdmin = false;

  return (
    <div className={styles.links}>
      {tokenExists ? (
        isAdmin ? (
          <Link href="/admin">
            <button className={styles.user}>Admin</button>
          </Link>
        ) : (
          <>
            <IconButton aria-label="toggle password visibility" edge="end">
              <NotificationsIcon
                fontSize="large"
                color="primary"
                sx={{ fontSize: 32, color: "white" }}
              />
            </IconButton>
            <IconButton aria-label="toggle password visibility" edge="end">
              <AccountCircleIcon
                fontSize="large"
                sx={{ fontSize: 32, color: "white" }}
              />
            </IconButton>
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
