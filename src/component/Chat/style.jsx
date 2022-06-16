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
    height: 800px;
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
    .subjectName {
        display: flex;
        width: 1424px;
        height: 100px;
        border-bottom: 1px solid black;
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
