import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NotFound from './components/SharedPages/NotFound/NotFound';
import Header from './components/SharedPages/Header/Header';
import Footer from './components/SharedPages/Footer/Footer';
import Register from './components/Authentication/Register/Register';
import Login from './components/Authentication/Login/Login';
import PythonHome from './components/Pages/Python/pythonHome/PythonHome';
import CHome from './components/Pages/C/CHome/CHome';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/pythonHome' element={<PythonHome></PythonHome>}></Route>
        <Route path='/cHome' element={<CHome></CHome>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route> 
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
