import React from 'react';
import useChat from './useHook';
import { Navbar, Sidebar } from './style';
const Chat = () => {
    const { Logout } = useChat();
    return (
        <header>
            <Navbar>
                <img src='./img/Home.png'></img>
                <ul>
                    <li>
                        <button onClick={{ Logout }}>로그아웃</button>
                    </li>
                </ul>
            </Navbar>
            <Sidebar>
                <div className='welcomeProfile'>
                    <div></div>
                    <p>
                        <span className='welcome'>환영합니다</span> <br />
                        <span className='profile'>
                            이무성<span>님</span>
                        </span>
                    </p>
                </div>
                <button onClick>
                    <p className='subject'>냥빌리지 프로젝트 01반</p>
                    <p className='professor'>이무성 교수님</p>
                    <img src='./img/Profile.png'></img>1
                </button>
            </Sidebar>
        </header>
    );
};
export default Chat;
