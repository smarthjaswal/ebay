import './App.css';
import Footer from '../src/components/Footer';
import HaveSellingBar from './components/HaveSellingBar';
import PopulorDestination from './components/PopularDestination';


function App() {
  return (
    <div className='App'>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-text">
            Navbar text with an inline element
          </span>
        </div>
      </nav>
      <HaveSellingBar />
      <br/>
      <PopulorDestination/>
      {/* <Discount/> */}
      <Footer />
    </div>
  );
}

export default App;
