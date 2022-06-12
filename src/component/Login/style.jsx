import styled from 'styled-components';

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .wireframe {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 1920px;
        width: 100%;
        height: 960px;
        background: linear-gradient(to right, #ffb910, #ff8400);
        text-align: center;
    }
    .logoDescription > img {
        width: 150px;
        height: 150px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 100px;
        margin-bottom: 10px;
    }
    span {
        font-size: 20px;
        color: white;
        font-family: 'SCDream7';
    }
    .greeting > p {
        font-size: 45px;
        color: white;
        font-family: 'SCDream7';
        font-weight: bold;
        margin: 0;
        margin-top: 35px;
        text-transform: uppercase;
    }
    .greeting > hr {
        width: 300px;
        height: 4px;
        color: white;
        border: none;
        background-color: white;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    input::placeholder {
        color: white;
        font-family: 'SCDream6';
        font-size: 12px;
    }

    .login {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        max-width: 350px;
        input {
            width: 100%;
            height: 25px;
            padding: 15px;
            border: 3px white solid;
            border-radius: 30px;
            background-color: #ffb910;
            text-indent: 40px;
            opacity: 0.78;
        }
        img {
            position: absolute;
            left: 24px;
            width: 20px;
            height: 20px;
        }
    }
    .password {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        max-width: 350px;
        input {
            width: 100%;
            height: 25px;
            padding: 15px;
            border: 3px white solid;
            border-radius: 30px;
            background-color: #ffb910;
            text-indent: 40px;
            opacity: 0.78;
        }
        img {
            position: absolute;
            left: 24px;
            width: 20px;
            height: 20px;
        }
    }
    .loginBtn {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        button {
            margin-top: 10px;
            width: 350px;
            height: 60px;
            padding: 15px;
            border: 0;
            background-color: white;
            color: #ffb910;
            font-size: 20px;
            font-weight: 1000;
            border-radius: 30px;
            font-family: 'SCDream6';
        }
        img {
            position: absolute;
            right: 24px;
            bottom: 16px;
            width: 24px;
            height: 24px;
        }
    }
`;
