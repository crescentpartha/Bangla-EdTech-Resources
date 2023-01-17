import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './components/Home/Home/Home';
import NotFound from './components/SharedPages/NotFound/NotFound';
import Header from './components/SharedPages/Header/Header';
import Footer from './components/SharedPages/Footer/Footer';
import Register from './components/Authentication/Register/Register';
import Login from './components/Authentication/Login/Login';
import RetrievePassword from './components/Authentication/RetrievePassword/RetrievePassword';

import CHome from './components/Pages/C/CHome/CHome';
import CIntroduction from './components/Pages/C/Contents/js/C_Introduction';
import CGetStarted from './components/Pages/C/Contents/js/C_GetStarted';
import CSyntax from './components/Pages/C/Contents/js/C_Syntax';

import PythonHome from './components/Pages/Python/PythonHome/PythonHome';
import PythonIntroduction from './components/Pages/Python/Contents/js/Python_Introduction';
import PythonGetStarted from './components/Pages/Python/Contents/js/Python_GetStarted';
import PythonSyntax from './components/Pages/Python/Contents/js/Python_Syntax';
import PythonComments from './components/Pages/Python/Contents/js/Python_Comments';
import PythonVariables from './components/Pages/Python/Contents/js/Python_Variables';
import PythonDataTypes from './components/Pages/Python/Contents/js/Python_DataTypes';
import PythonNumbers from './components/Pages/Python/Contents/js/Python_Numbers';
import PythonCasting from './components/Pages/Python/Contents/js/Python_Casting';
import PythonStrings from './components/Pages/Python/Contents/js/Python_Strings';
import PythonBooleans from './components/Pages/Python/Contents/js/Python_Booleans';
import PythonOperators from './components/Pages/Python/Contents/js/Python_Operators';
import PythonLists from './components/Pages/Python/Contents/js/Python_Lists';
import PythonTuples from './components/Pages/Python/Contents/js/Python_Tuples';
import PythonSets from './components/Pages/Python/Contents/js/Python_Sets';
import PythonDictionaries from './components/Pages/Python/Contents/js/Python_Dictionaries';
import PythonIfElse from './components/Pages/Python/Contents/js/Python_IfElse';
import PythonWhileLoops from './components/Pages/Python/Contents/js/Python_WhileLoops';
import PythonForLoops from './components/Pages/Python/Contents/js/Python_ForLoops';
import PythonFunctions from './components/Pages/Python/Contents/js/Python_Functions';
import PythonLambda from './components/Pages/Python/Contents/js/Python_Lambda';
import PythonArrays from './components/Pages/Python/Contents/js/Python_Arrays';
import PythonClassesObjects from './components/Pages/Python/Contents/js/Python_ClassesObjects';
import PythonInheritance from './components/Pages/Python/Contents/js/Python_Inheritance';
import PythonIterators from './components/Pages/Python/Contents/js/Python_Iterators';
import PythonScope from './components/Pages/Python/Contents/js/Python_Scope';
import PythonModules from './components/Pages/Python/Contents/js/Python_Modules';
import PythonDates from './components/Pages/Python/Contents/js/Python_Dates';
import PythonMath from './components/Pages/Python/Contents/js/Python_Math';
import PythonJSON from './components/Pages/Python/Contents/js/Python_JSON';
import PythonRegEx from './components/Pages/Python/Contents/js/Python_RegEx';
import PythonPIP from './components/Pages/Python/Contents/js/Python_PIP';
import PythonTryExcept from './components/Pages/Python/Contents/js/Python_TryExcept';
import PythonUserInput from './components/Pages/Python/Contents/js/Python_UserInput';
import PythonStringFormatting from './components/Pages/Python/Contents/js/Python_StringFormatting';

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
          <Route path='python_comments' element={<PythonComments></PythonComments>}></Route>
          <Route path='python_variables' element={<PythonVariables></PythonVariables>}></Route>
          <Route path='python_datatypes' element={<PythonDataTypes></PythonDataTypes>}></Route>
          <Route path='python_numbers' element={<PythonNumbers></PythonNumbers>}></Route>
          <Route path='python_casting' element={<PythonCasting></PythonCasting>}></Route>
          <Route path='python_strings' element={<PythonStrings></PythonStrings>}></Route>
          <Route path='python_booleans' element={<PythonBooleans></PythonBooleans>}></Route>
          <Route path='python_operators' element={<PythonOperators></PythonOperators>}></Route>
          <Route path='python_lists' element={<PythonLists></PythonLists>}></Route>
          <Route path='python_tuples' element={<PythonTuples></PythonTuples>}></Route>
          <Route path='python_sets' element={<PythonSets></PythonSets>}></Route>
          <Route path='python_dictionaries' element={<PythonDictionaries></PythonDictionaries>}></Route>
          <Route path='python_if-else' element={<PythonIfElse></PythonIfElse>}></Route>
          <Route path='python_while-loops' element={<PythonWhileLoops></PythonWhileLoops>}></Route>
          <Route path='python_for-loops' element={<PythonForLoops></PythonForLoops>}></Route>
          <Route path='python_functions' element={<PythonFunctions></PythonFunctions>}></Route>
          <Route path='python_lambda' element={<PythonLambda></PythonLambda>}></Route>
          <Route path='python_arrays' element={<PythonArrays></PythonArrays>}></Route>
          <Route path='python_classes-objects' element={<PythonClassesObjects></PythonClassesObjects>}></Route>
          <Route path='python_inheritance' element={<PythonInheritance></PythonInheritance>}></Route>
          <Route path='python_iterators' element={<PythonIterators></PythonIterators>}></Route>
          <Route path='python_scope' element={<PythonScope></PythonScope>}></Route>
          <Route path='python_modules' element={<PythonModules></PythonModules>}></Route>
          <Route path='python_dates' element={<PythonDates></PythonDates>}></Route>
          <Route path='python_math' element={<PythonMath></PythonMath>}></Route>
          <Route path='python_json' element={<PythonJSON></PythonJSON>}></Route>
          <Route path='python_reg-ex' element={<PythonRegEx></PythonRegEx>}></Route>
          <Route path='python_pip' element={<PythonPIP></PythonPIP>}></Route>
          <Route path='python_try-except' element={<PythonTryExcept></PythonTryExcept>}></Route>
          <Route path='python_user-input' element={<PythonUserInput></PythonUserInput>}></Route>
          <Route path='python_string-formatting' element={<PythonStringFormatting></PythonStringFormatting>}></Route>
          {/* <Route path='' element={}></Route> */}
        </Route>

        <Route path='/cHome' element={<CHome></CHome>}>
          <Route path='c_introduction' element={<CIntroduction></CIntroduction>}></Route>
          <Route path='c_getStarted' element={<CGetStarted></CGetStarted>}></Route>
          <Route path='c_syntax' element={<CSyntax></CSyntax>}></Route>
          {/* <Route path='' element={}></Route> */}
        </Route>

        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/retrieve-password' element={<RetrievePassword></RetrievePassword>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;