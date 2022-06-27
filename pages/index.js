import Link from 'next/link'
// import classes from './../styles/home.module.css'
import styles from "./../styles/navbar.module.css";
let home = () => {
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
            </div>

        </nav>
    )
}
export default home