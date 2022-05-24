import Main from './Main/index';
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
