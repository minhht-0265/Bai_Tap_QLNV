import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import Users from './pages/users';
import Adduser from './pages/users/add/index';
import Register from './components/frontend/auth/Register';
import Login from './components/frontend/auth/Login';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
 
axios.defaults.withCredentials = true;


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Users/>}/>
          <Route path="/add-user" element={<Adduser/>} />
          <Route path ="/login" element={<Login/>}/>
          <Route path ="/register" element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
