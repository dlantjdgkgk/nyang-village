import styled from 'styled-components';

export const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1920px;
    width: 100%;
    height: 85px;
    background: linear-gradient(to right, #ffb910, #ff8400);
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    img {
        width: 50px;
        height: 50px;
        margin-left: 15px;
    }
    li {
        list-style: none;
        margin-right: 15px;
    }
`;

export const DIV = styled.div`
    display: flex;
`;

export const Sidebar = styled.div`
    width: 496px;
    height: 880px;
    border-right: 1px double #ffcf82;
    .welcomeProfile {
        display: flex;
        justify-content: space-between;
        margin-right: 20px;
        font-family: 'JalnanOTF';
        font-size: 20px;
        font-weight: bold;
        margin-right: 40px;
        .welcome {
            color: #5f5f5f;
        }
        .profile {
            margin-left: 24px;
            color: #414141;
            span {
                font-size: 16px;
            }
        }
    }
    .chatName {
        display: flex;
        justify-content: center;
    }
    button {
        width: 417px;
        height: 108px;
        border-radius: 20px;
        border: none;
        background-color: white;
        box-shadow: 1px 1px 8px 0px gray;
        /* box-shadow: 1px 1px 2px 0px gray; */
        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .subjectProfessor {
                display: flex;
                flex-direction: column;
                margin-left: 20px;
                .subject {
                    font-size: 18px;
                    font-family: 'SCDream8';
                    color: #4c4948;
                }
                .professor {
                    font-size: 12px;
                    font-family: 'SCDream4';
                    color: #4c4948;
                    margin-top: 6px;
                    margin-right: 116px;
                }
            }
            .students {
                span {
                    font-size: 16px;
                    font-family: 'SCDream5';
                    color: #444444;
                    margin-left: 12px;
                    margin-right: 12px;
                }
            }
        }
    }
`;

export const ChatRoom = styled.div`
    display: flex;
    flex-direction: column;
    .subjectName {
        display: flex;
        width: 1424px;
        height: 100px;
        border-bottom: 1px solid #ffcf82;
        justify-content: space-between;
        align-items: center;
    }
    .profile {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
    }
    .subject {
        font-size: 18px;
        font-family: 'SCDream8';
        color: #4c4948;
    }
    .professor {
        font-size: 12px;
        font-family: 'SCDream4';
        color: #4c4948;
        margin-top: 6px;
        margin-right: 116px;
    }
    button {
        border: none;
        background-color: white;
        margin-right: 20px;
        font-size: 24px;
    }
`;

export const Chatting = styled.div`
    margin: 0 auto;
    margin-top: 20px;
    width: 95%;
    background-color: white;
    box-sizing: border-box;
    .chatWrapper {
        overflow-y: auto;
        height: 600px;
    }
    .sendContents {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        overflow: hidden;
    }
    .receiveContents {
        display: inline-flex;
        flex-direction: column;
        overflow: hidden;
    }
    // float 를 위한 속성
    .sendContent {
        margin-top: 20px;
        background-color: #ff9601;
        border-radius: 20px;
        padding: 10px;
        max-width: 150px;
    }
    .receiveContent {
        margin-top: 20px;
        background-color: #f5b556;
        border-radius: 20px;
        padding: 10px;
        max-width: 150px;
    }
`;

export const SendText = styled.div`
    input {
        position: fixed;
        margin-top: 30px;
        width: 70%;
        height: 120px;
        border: 2px solid #ff7301;
        padding-left: 8px;
        border-radius: 16px;
    }
    input::placeholder {
        color: #ff8601;
        font-family: 'SCDream6';
        font-size: 12px;
    }
`;
