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
import TerminalRequest from './pages/Terminals/TerminalRequest';
import Merchants from './pages/Merchants/Merchants';
import AddMerchant from './pages/Merchants/AddMerchant';
import Merchant from './pages/Merchants/Merchant';
import Activity from './pages/Activity/Activity';


const PrivateRoute = ({ children}) => {
  // console.log(JSON.parse(localStorage.getItem('userDetails')))
  return localStorage.getItem('userDetails') ? children : <Navigate to="/login" />
    
  }

function App() {
  return (
    // <BrowserRouter>
      <Suspense fallback="f">
        <Routes>    
         {/*Checking if logged in  */}
         <Route path='/' exact element={ <PrivateRoute><Dashboard /> </PrivateRoute> }/>
        
        {/* Login */}


         <Route path='/login' exact element={<Login />} />

         <Route path='/register' exact element={<Register />} />

         {/* Dashboard Management */}

         <Route path='/dashboard' exact element={<Dashboard />} />

          {/* Terminal Management */}

          <Route path='/terminals' exact element={ <PrivateRoute><Terminal /> </PrivateRoute> } />
          <Route path='/terminal-requests' exact element={<PrivateRoute><TerminalRequest /> </PrivateRoute>} />
          <Route path='/add-terminal' exact element={<PrivateRoute><AddTerminal /> </PrivateRoute>} />

          {/* Transactions */}

          <Route path='/transactions' exact element={<PrivateRoute><Transactions /> </PrivateRoute>} />
          <Route path='/transaction/:id' exact element={<PrivateRoute><Transaction /> </PrivateRoute>} />

          {/* Disputes */}

          <Route path='/disputes' exact element={<PrivateRoute><Disputes /> </PrivateRoute>} />

          {/* Disputes */}

          <Route path='/activity-log' exact element={<PrivateRoute><Activity /> </PrivateRoute>} />

          {/* Settlement */}

          <Route path='/settlements' element={<PrivateRoute><Settlement /> </PrivateRoute>} />
          <Route path='/settlement/:id' element={<PrivateRoute><ViewSettlement /> </PrivateRoute>} />

          {/* Settlement */}

          <Route path='/merchants' exact element={<PrivateRoute><Merchants /> </PrivateRoute>} />
          <Route path='/merchant/:id' element={<PrivateRoute><Merchant /> </PrivateRoute>} />
          <Route path='/add-merchant' element={<PrivateRoute><AddMerchant /> </PrivateRoute>} />

          {/* Get started */}
          <Route path='/get-started' exact element={<PrivateRoute><Start /> </PrivateRoute>} />

        </Routes>
      </Suspense>
    // </BrowserRouter>
  );
}

export default App;
