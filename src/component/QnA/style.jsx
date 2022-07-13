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
    margin-bottom: 100px;
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

export const BoardHeader = styled.div`
    display: flex;
    align-items: center;
    h1 {
        color: #ff9000;
        font-weight: bold;
    }
    button {
        color: white;
        background-color: #ff7301;
        border: none;
    }
`;

export const BoardContents = styled.div`
    margin-top: 10px;
    display: flex;
    border-top: 2px solid #ff7301;
    border-bottom: 2px solid #ff7301;
    color: #ff9000;
    font-weight: bold;
    div {
        padding: 4px;
    }
`;
