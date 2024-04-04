import { Routes,Route } from 'react-router-dom';
import './App.css';
import ContactPage from './Page/ContactPage.js';
import HomeBanner from './Page/HomeBanner.js';
import Header from "./Components/Header"
import Product from "./Page/Product_list.js";
import About from "./Page/About.js";
import Qualified from "./Page/Qualified.js";
import toast, { Toaster } from 'react-hot-toast';

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
        {/* link to Product page */}
        <Route path="/Product" element={<Product/>} />
        {/* link to homepage */}
        <Route path="/" element={<HomeBanner/>} />
      </Routes>
      <Toaster />
    </div>

  );
}

export default App;
