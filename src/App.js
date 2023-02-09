import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home'
import Details from './components/Details';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/details/:name/" element={<Details />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
