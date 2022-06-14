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
    button {
        width: 417px;
        height: 108px;
        border-radius: 10px;
        border: none;
        box-shadow: ;
    }
    p {
    }
`;
