import Link from 'next/link'
import classes from './../styles/home.module.css'
let home = () => {
    return (
        <div>
            <nav className={classes.nav}>
                <div className={classes.nav1}>
                    Name
                </div>
                <div className={classes.nav2}>
                    <Link href={'product'}>Product</Link>
                    <Link href={'homepage'}>Homepage</Link>
                    <Link href={'About'}>About</Link>
                </div>
            </nav>

        </div>
    )
}
export default home