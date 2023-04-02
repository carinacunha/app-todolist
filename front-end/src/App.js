import { Route,  BrowserRouter } from 'react-router-dom';
import React from 'react';
import Tasks from './pages/Tasks';
import Login from './pages/Login';
// import './styles/app.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/tasks" component={ Tasks } />
      <Route path="/login" component={ Login } />
    </BrowserRouter>

  
  );
}

export default App;
