import './App.css';
import Index from "./layouts/Index";
import {Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" Component={Index}></Route>
        </Routes>
    </div>
  );
}

export default App;
