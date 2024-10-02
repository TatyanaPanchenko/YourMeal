import Header from "../components/Header/Header";
import Firstscreen from "../components/Firstscreen/Firstscreen";
import Nav from "../components/Nav/Nav";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import nav from "../data/nav.json";
import "./app.module.scss";

function App() {
  return (
    <>
      <Header />
      <Firstscreen />
      <Nav nav={nav} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
