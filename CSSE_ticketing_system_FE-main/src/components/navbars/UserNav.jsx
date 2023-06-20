// import styles from "../css/User";
import styles from "../css/style.module.css";
import logo from './images/logo.png'

//get the user details from the session
function UserNav() {
  return (
    <header className="fixed-top">
      <div className={styles.main_container}>
        <nav className={styles.navbar}>
          {/* <img alt="Images is loading.." src={logo} style={{ width: "50px", height: "50px", marginLeft: "70px" }}></img> */}
          <h4 style={{ color: "black", marginLeft:'10px' , marginTop: "7px" }}>
            Royal Expression Transport Service
          </h4>
          <nav>
            <a href="/"> Home </a>
            <a href="/"> Generate QR </a>
            <a href="/"> Time Table</a>
            <a href="/"> About Us</a>
            <a href="/"> Contact Us</a>
            <a href="/"> Log Out</a>
          </nav>
        </nav>
      </div>
    </header>
  );
}

export default UserNav;
