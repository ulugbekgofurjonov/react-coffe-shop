import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Explore from './components/Explore';
import Favourite from './components/Favourite';
import Instant from './components/Instant';
import Customers from './components/Customers';


function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Favourite/>
      <Explore/>
      <Instant/>
      <Customers/>
    </div>
  );
}

export default App;
