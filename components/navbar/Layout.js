import classes from './Layout.module.css';
import Navbar from './Navbar';

function Layout(props) {
  return (
    <div>
      <Navbar></Navbar>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
