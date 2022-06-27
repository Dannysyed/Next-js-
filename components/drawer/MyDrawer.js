import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./myDrawer.module.css";
import { Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import Link from 'next/link'


export default function MyDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ul className={styles.navLinks}>
        <li>
          <Link href={"/section/technology"}>Technology</Link>
        </li>
        <li>
          <Link href={"/section/anime"}>Anime</Link>
        </li>
        <li>
          <Link href={"/section/controversy"}>Controversy</Link>
        </li>
        <li>
          <Link href={"/section/celebs"}>Celebs</Link>
        </li>
        <li>
          <Link href={"/section/productivity"}>Productivity</Link>
        </li>
      </ul>
      <Divider />
      <Button
        endIcon={<CreateIcon />}
        variant="text"
        className={styles.addPost}
        disableElevation
      >
        Add post
      </Button>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon
            className={styles.moreIcon}
            onClick={toggleDrawer(anchor, true)}
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
