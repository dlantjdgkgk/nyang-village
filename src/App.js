import React from 'react';
import Login from './pages/Login';
import Chat from './pages/chat';
import QnA from './pages/QnA';
import CreateQna from './pages/CreateQna';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/chat' element={<Chat />}></Route>
                <Route path='/qna' element={<QnA />}></Route>
                <Route path='/createQnA' element={<CreateQna />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
