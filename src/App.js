import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Explore from './components/Explore';
import Favourite from './components/Favourite';
import SellingCoffe from './components/SellingCoffe';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Explore/>
      <Favourite/>
      <SellingCoffe/>
    </div>
  );
}

export default App;
