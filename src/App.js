import './App.css';
import { Routes, Route } from "react-router-dom" ;
import Show from "./views/Show";
import Landing from "./views/Landing";
function App() {
  return (
    <Routes>
    <Route index element={<Landing />} />
    <Route path="/show" element={<Show />} />
    
    </Routes> 
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
