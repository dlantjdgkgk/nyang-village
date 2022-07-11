import { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const useLogin = () => {
    const [inputs, setInputs] = useState({
        id: '',
        password: '',
    });
    const [cookies, setCookie] = useCookies([]);
    const { id, password } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const loginAPI = async () => {
        const payload = {
            id: id,
            password: password,
        };
        const response = await axios.post(
            'https://api.digital-hamster.net/login',
            payload
        );
        setCookie('token', `Bearer ${response?.data?.result?.Token}`);
        console.log(response);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id === '') {
            alert('id을 입력해주세요');
        }
        if (id !== '' && password === '') {
            alert('pw을 입력해주세요');
        }
        setInputs({
            name: '',
            nickname: '',
        });
        loginAPI();
    };
    return {
        handleSubmit,
        onChange,
        id,
        password,
    };
};
export default useLogin;
