import { Button } from "@mui/material";
import React, { useEffect } from "react";
import styles from "./navbar.module.css";
import CreateIcon from "@mui/icons-material/Create";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import MyDrawer from "../drawer/MyDrawer";

// import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Link from 'next/link'
import useDeviceSize from "../../hooks/useWindowDimensions";
function Navbar() {
  // const [_document, set_document] = React.useState(null)

  // React.useEffect(() => {
  //   set_document(document)
  // }, [])
  const [width] = useDeviceSize()
  console.log(width)

  // const vw = Math.max(_document.documentElement.clientWidth || 0, window.innerWidth || 0)





  return (
    <nav className={styles.nav}>
      <div className={styles.logoBox}>
        <h2>
          <Link className={styles.reactRouterLink} href="/">
            Geekies
          </Link>
        </h2>
      </div>
      <div className={styles.navLinks}>
        <ul>
          <li>
            <Link href={"/section/TECHNOLOGY"}>Technology</Link>
          </li>
          <li>
            <Link href={"/section/ANIME"}>Anime</Link>
          </li>
          <li>
            <Link href={"/section/GAMES"}>Games</Link>
          </li>
          <li>
            <Link href={"/section/CELEB"}>Celebs</Link>
          </li>
          <li>
            <Link href={"/section/SPORTS"}>Sports</Link>
          </li>
        </ul>
      </div>
      <div className={styles.others}>
        {width > 1300 ? (
          <Button
            endIcon={<CreateIcon />}
            variant="contained"
            className={styles.addPost}
            disableElevation
          >
            Add Blog
          </Button>
        ) : (
          <MyDrawer />
        )}
      </div>

    </nav>
  );
}

export default Navbar;
