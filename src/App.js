import './App.css';
import Show from "./views/Show";
import Landing from "./views/Landing";
import Header from './componentes/header/Header';
import Footer from './componentes/footer/Footer';
function App() {
  return (
   
  <div>
    <Header/>
    <h1>GREEN GO</h1>
    <Landing />
    <Footer/>
   </div>
    /* <div>
      <h4>{images[0].description}</h4>
      <h3>{images[0].price}</h3>
      <h2>{images[0].shop}</h2>
      <img src={images[0].img}/>
      <h1>GREEN GO</h1>
      <section className='components'>
      <body_product />
     </section>
    </div> */

  );
}

export default App;
