import './App.css';

import Main from './components/Main.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="App">
        <h1>books</h1>
        <Routes>
          <Route path="/" element ={ <Main/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
