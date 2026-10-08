import { Outlet, ScrollRestoration } from "react-router";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import styles from "./App.module.scss";

function App() {
  return (
    <>
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <div className="flex-fill">
        <Outlet />
      </div>
      <Footer />
    </div>
    <ScrollRestoration/>
    </>
  );
}
export default App;
