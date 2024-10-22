import About from "./components/about";
import Certifications from "./components/certifications";
import Footer from "./components/footer";
import Header from "./components/header";
import Nav from "./components/nav";
import Portfolio from "./components/portfolio";
import DataItem from "./components/content-type";
import data from "./content.json";
function App() {
  const content = data as DataItem;
  return (
    <>
      <Nav Content={content} />
      <Header Content={content} />
      <About Content={content} />
      <Portfolio Content={content} />
      <Certifications Content={content} />
      <Footer Content={content} />
    </>
  );
}

export default App;
