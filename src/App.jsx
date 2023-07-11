import Content from "./componets/Content";
import Footer from "./componets/Footer";
import Header from "./componets/Header";

const App = () => {
  const headerLogo = "Milon Chandro";

  return (
    <>
      <Header webLogo={headerLogo}></Header>
      <Content></Content>
      <Footer></Footer>
    </>
  );
};

export default App;
