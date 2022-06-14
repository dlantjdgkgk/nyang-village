import React from 'react';
import { useNavigate } from 'react-router-dom';

const useChat = () => {
    const navigate = useNavigate();
    const Logout = () => {
        navigate('/');
    };
    return {
        Logout,
    };
};
export default useChat;
