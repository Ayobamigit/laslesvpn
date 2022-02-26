import React, {Suspense} from 'react';
import './App.scss';
import {Route, Routes, Navigate} from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/AuthPages/Login';
import Register from './pages/AuthPages/Register';
import Terminal from './pages/Terminals/Terminal';
import Transactions from './pages/Transactions/Transactions';
import AddTerminal from './pages/Terminals/AddTerminal';
import Transaction from './pages/Transactions/Transaction';


const PrivateRoute = ({ component, ...props }) => {
  const Component = component
  return (
    <Route
      {...props}
      render={
        (routeProps) => localStorage.getItem('userDetails') ? <Component {...routeProps} /> : <Navigate to="/login" />
      }
    />
  )
}

function App() {
  return (
    // <BrowserRouter>
      <Suspense fallback="f">
        <Routes>    
         {/*Checking if logged in  */}
         <Route path='/' exact render={() => localStorage.getItem('userDetails') ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}/>
        
        {/* Login */}


         <Route path='/login' exact element={<Login />} />

         <Route path='/register' exact element={<Register />} />

         {/* Dashboard Management */}

         <Route path='/dashboard' exact element={<Dashboard />} />

          {/* Terminal Management */}

          <Route path='/terminals' exact element={<Terminal />} />
          <Route path='/add-terminal' exact element={<AddTerminal />} />

          {/* Transactions */}

          <Route path='/transactions' exact element={<Transactions />} />
          <Route path='/transaction/:id' exact element={<Transaction />} />
        </Routes>
      </Suspense>
    // </BrowserRouter>
  );
}

export default App;
