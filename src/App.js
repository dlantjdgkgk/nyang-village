import Login from './pages/Login';
import Chat from './pages/chat';
import React from 'react';
import QnA from './pages/QnA';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/chat' element={<Chat />}></Route>
                <Route path='/qna' element={<QnA />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
