import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {GlobalStyle} from './GlobalStyles'
import Home from './components/Home';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <GlobalStyle/>
    </Router>

  );
}

export default App;
