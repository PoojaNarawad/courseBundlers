import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import About from './components/About/About';
import ForgetPassword from './components/Auth/ForgetPassword';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import Request from './components/Request/Request';
import NotFound from './components/Layout/NotFound/NotFound';
import Subscribe from './components/Payments/Subscribe';
import PaymentFail from './components/Payments/PaymentFail';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import Dashboard from './components/Admin/Dashboard/Dashboard';


function App() {
  window.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
  });

  return (
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/course/:id' element={<CoursePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/changepassword' element={<ChangePassword/>}/>
        <Route path='/updateprofile' element={<UpdateProfile/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/request' element={<Request/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forgetpassword' element={<ForgetPassword/>}/>
        <Route path='/resetpassword/:token' element={<ResetPassword/>}/>

        <Route path='/subscribe' element={<Subscribe/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/paymentsuccess' element={<PaymentSuccess/>}/>
        <Route path='/paymentfail' element={<PaymentFail/>}/>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
