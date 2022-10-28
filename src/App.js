import { Routes, Route} from 'react-router-dom'  
import Profile from './page/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
