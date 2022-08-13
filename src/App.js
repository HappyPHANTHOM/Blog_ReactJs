import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Detail  from './components/Detail/Detail';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route  exact path='/users/:id' element={<Detail/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/posts/:id' element={<Slider/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
