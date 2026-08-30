import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Learning from './Learning';
import Opening from './Opening';
import LevelSelection from './Levels3';

function App() {
  return (
    <HashRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/op" element={<Opening />} />
        <Route path="/learning" element={<Learning />} />
        <Route path='/lvl' element={<LevelSelection/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
