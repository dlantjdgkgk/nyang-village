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
