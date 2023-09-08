
import { Routes,Route } from 'react-router-dom';
import './App.css';
import { ContactPage } from './components/core/ContactPage';
import  { Home } from "./components/core/Home";
function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/contactpage" element={<ContactPage />} />
       <Route path="/" element={<Home/>} />
     </Routes>
    </div>
  );
}

export default App;
