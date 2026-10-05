import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <div className="flex-fill">
        <h1>App</h1>
      </div>
      <Footer />
    </div>
  );
}
export default App;
