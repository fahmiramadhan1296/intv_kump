// import './App.css';
// import { useEffect, useState } from 'react';
// import { useQuery } from "./redux/features/socialMedia/service";
// import { useDispatch } from 'react-redux';
// import { setSelectedUser } from './redux/features/socialMedia/actions';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Userpage from './users';
import Albumpage from "./album";
import Postpage from "./posts";


function App() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Userpage />} />
          <Route exact path="/posts" element={<Postpage />} />
          <Route exact path="/album" element={<Albumpage />} />
        </Routes>
      </Router>
    );
}

export default App;
