import { NavLink } from "react-router";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <strong> React-router </strong>
      </div>
      <ul className={styles.headerList}>
        <NavLink to="/"> Homepage </NavLink>
        <NavLink to="/profile"> Profile </NavLink>
      </ul>
    </header>
  );
}

export default Header;
