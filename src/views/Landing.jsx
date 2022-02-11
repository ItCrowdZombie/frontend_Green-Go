import "../App.css";
import { CardGrid } from "../componentes/cards/CardGrid";
import Header from "../componentes/header/Header";
import Footer from "../componentes/footer/Footer";

const Landing = () => {
  return (
    <div>
      <Header />
      <CardGrid />
      <Footer />
    </div>
  );
};

export default Landing;
