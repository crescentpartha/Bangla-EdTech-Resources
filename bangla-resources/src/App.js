import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NotFound from './components/SharedPages/NotFound/NotFound';
import Header from './components/SharedPages/Header/Header';
import Footer from './components/SharedPages/Footer/Footer';
import Register from './components/Authentication/Register/Register';
import Login from './components/Authentication/Login/Login';
import PythonHome from './components/Pages/Python/PythonHome/PythonHome';
import PythonIntroduction from './components/Pages/Python/Contents/js/Python_Introduction';
import PythonGetStarted from './components/Pages/Python/Contents/js/Python_GetStarted';
import PythonSyntax from './components/Pages/Python/Contents/js/Python_Syntax';
import CHome from './components/Pages/C/CHome/CHome';
import CIntroduction from './components/Pages/C/Contents/js/C_Introduction';
import CGetStarted from './components/Pages/C/Contents/js/C_GetStarted';
import CSyntax from './components/Pages/C/Contents/js/C_Syntax';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/pythonHome' element={<PythonHome></PythonHome>}>
          <Route path='python_introduction' element={<PythonIntroduction></PythonIntroduction>}></Route>
          <Route path='python_getStarted' element={<PythonGetStarted></PythonGetStarted>}></Route>
          <Route path='python_syntax' element={<PythonSyntax></PythonSyntax>}></Route>
        </Route>
        <Route path='/cHome' element={<CHome></CHome>}>
          <Route path='c_introduction' element={<CIntroduction></CIntroduction>}></Route>
          <Route path='c_getStarted' element={<CGetStarted></CGetStarted>}></Route>
          <Route path='c_syntax' element={<CSyntax></CSyntax>}></Route>
        </Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
