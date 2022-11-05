import { Routes, Route} from 'react-router-dom'  
import Profile from './page/Profile';
import Contact from './page/contact/Contact';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
