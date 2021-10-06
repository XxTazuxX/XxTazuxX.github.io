import logo from "./logo.svg";
import "./css/plugins.css";
import "./css/style.css";
import "./css/blue-color.css";
import "./App.css";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <Preloader />
      {/*<Header />*/}
    </div>
  );
}

export default App;
