import { Routes,Route } from 'react-router-dom';
import './App.css';
import ContactPage from './Page/ContactPage.js';
import HomeBanner from './Page/HomeBanner.js';
import Header from "./Components/Header"
import Product from "./Page/Product_list.js";
import About from "./Page/About.js";
import Qualified from "./Page/Qualified.js";

function App() {
  return (
    <div className="App">
        {/* Header part import */}
        <Header />
        {/* Router import kela ahe  */}
        <Routes>
        {/* link to contactpage */}
        <Route path="/Contactpage" element={<ContactPage />} />
        {/* link to About page */}
        <Route path="/About" element={<About/>} />
        {/* link  to Qualified Insurance */}
        <Route path="/Qualified" element={<Qualified/>} />
        {/* link to Product page */}
        <Route path="/Product" element={<Product/>} />
        {/* link to homepage */}
        <Route path="/" element={<HomeBanner/>} />
      </Routes>
    </div>
  );
}

export default App;
