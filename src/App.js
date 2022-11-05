import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ListBeers from './pages/ListBeers';
import SingleBeer from './pages/SingleBeer';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/beers" element={ <ListBeers /> } />
        <Route path="/beers/:beerId" element={ <SingleBeer /> } />
        <Route path="/random-beer" element={ <RandomBeer /> } />
        <Route path="/new-beer" element={ <NewBeer /> } />
      </Routes>
    </div>
  );
}

export default App;
