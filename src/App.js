
import { Routes,Route } from 'react-router-dom';
import './App.css';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/contactpage" element={<ContactPage />} />
     </Routes>
    </div>
  );
}

export default App;
