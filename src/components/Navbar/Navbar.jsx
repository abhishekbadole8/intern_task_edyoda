import styles from "./Navbar.module.css"
import logo from "../../assets/LOGO.svg"
import searchIcon from "../../assets/Vector.svg";

function Navbar() {
    return (
        <header>

            {/* Left */}
            <div className={styles.leftSide}>
                <div className={styles.logo}>
                    <img src={logo} alt="logo" />
                </div>

                <div className={styles.navs}>
                    <div className={styles.courses}>
                        <select name="Courses" id="Courses">
                            <option name="courses" value="Courses" >Courses</option>
                        </select>
                    </div>
                    <div className={styles.programs}>
                        <select name="Programs" id="Programs">
                            <option name="programs" value="Programs">Programs</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Right  */}
            <div className={styles.rightSide}>

                <div className={styles.inputBox}>
                    <img src={searchIcon} alt="search-icon" />
                </div>

                <div className={styles.buttons}>
                    <button className={styles.login}>Log in</button>
                    <button className={styles.joinnow}>JOIN NOW</button>
                </div>
            </div>
        </header>
    )
}
export default Navbar;