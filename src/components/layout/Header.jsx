import { Link } from "react-router";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <strong> React-router </strong>
      </div>
      <ul className={styles.headerList}>
        <Link to="/" className="btn btn-primary mr-15">
          {" "}
          Homepage{" "}
        </Link>
        <Link to="/profile" className="btn btn-primary">
          {" "}
          Profile{" "}
        </Link>
        <Link to="/efez"> ??? </Link>
      </ul>
    </header>
  );
}

export default Header;
