import React from 'react';
import PrivateRoute from './components/privateRoute';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import Signin from './views/signin';
import Signup from './views/signup';
import ForgotPassword from './views/forgotPassword';
import Home from './views/home';

function App() {
  return (
    <>
    <AuthProvider>
      <React.Fragment>
          <Routes>
            <Route path="/SignUp" element={<Signup />} />
            <Route exact path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/SignIn" element={<Signin />} />
            <Route path="/forgotPassword" element={<ForgotPassword/>}/>
          </Routes>
      </React.Fragment>
      </AuthProvider>
    </>
  );
}

export default App;
