// import './App.css';
// import { useEffect, useState } from 'react';
// import { useQuery } from "./redux/features/socialMedia/service";
// import { useDispatch } from 'react-redux';
// import { setSelectedUser } from './redux/features/socialMedia/actions';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Userpage from './users';

function App() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Userpage />} />
        </Routes>
      </Router>
    );
}

export default App;
