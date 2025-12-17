import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Explore from './components/Explore';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Explore/>
    </div>
  );
}

export default App;
