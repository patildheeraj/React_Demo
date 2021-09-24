import Banner from "./components/Banner";
import Campain from "./components/Campain";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Mid from "./components/Mid";
import Nav from "./components/Nav";

function App() {
  return (
    <main className="wrapper">
      <Header />
      <Nav />
      <Campain />
      <Banner />
      <Mid />
      <Footer />
    </main>
  );
}

export default App;
