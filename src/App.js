import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ClearanceSale from './components/ClearanceSale';
import Categories from './components/Categories';
import Arrivals from './components/Arrivals';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Navbar ></Navbar>
      <HeroSection></HeroSection>
      <ClearanceSale></ClearanceSale>
      <Categories></Categories>
      <Arrivals></Arrivals>
      <Footer></Footer>
    </div>
  );
  
}

export default App;
