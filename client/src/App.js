import './App.css';

import Main from './components/Main.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element ={ <Main/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
