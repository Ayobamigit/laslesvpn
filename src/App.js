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
import Disputes from './pages/Disputes/Disputes';
import Settlement from './pages/Settlement/Settlement';
import ViewSettlement from './pages/Settlement/ViewSettlement';
import Start from './pages/GettingStarted/Start';


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
         <Route path='/' exact element={() => localStorage.getItem('userDetails') ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}/>
        
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

          {/* Disputes */}

          <Route path='/disputes' exact element={<Disputes />} />

          {/* Settlement */}

          <Route path='/settlements' exact element={<Settlement />} />
          <Route path='/settlement/:id' exact element={<ViewSettlement />} />

          {/* Get started */}
          <Route path='/get-started' exact element={<Start />} />

        </Routes>
      </Suspense>
    // </BrowserRouter>
  );
}

export default App;
