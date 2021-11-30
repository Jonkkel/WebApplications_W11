import './App.css';

import Main from './components/Main.js';
import BookPage from './components/BookPage.js';
import ErrorScreen from './components/ErrorScreen.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="App">
        <h1>books</h1>
        <Routes>
          <Route path="/" element ={ <Main/>} />
          <Route path="/book/:id" element={ <BookPage/>} />
          <Route path="/:id" element={ <ErrorScreen/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
