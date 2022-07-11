import React from 'react';
import useChat from './useHook';
import { Navbar, Sidebar, ChatRoom, DIV, Chatting, SendText } from './style';
import { AiOutlineMenu } from 'react-icons/ai';
const Chat = () => {
    const { Logout } = useChat();
    return (
        <>
            <header>
                <Navbar>
                    <img src='./img/Home.png'></img>
                    <ul>
                        <li>
                            <button onClick={{ Logout }}>로그아웃</button>
                        </li>
                    </ul>
                </Navbar>
            </header>
            <DIV>
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
                    <div className='chatName'>
                        <button onClick>
                            <div>
                                <div className='subjectProfessor'>
                                    <span className='subject'>
                                        냥빌리지 프로젝트 01반
                                    </span>
                                    <span className='professor'>
                                        이무성 교수님
                                    </span>
                                </div>
                                <div className='students'>
                                    <img src='./img/Profile.png'></img>
                                    <span>1</span>
                                </div>
                            </div>
                        </button>
                    </div>
                </Sidebar>
                <ChatRoom>
                    <div className='subjectName'>
                        <div className='profile'>
                            <span className='subject'>
                                냥빌리지 프로젝트 01반
                            </span>
                            <span className='professor'>이무성 교수님</span>
                        </div>
                        <button>
                            <AiOutlineMenu />
                        </button>
                    </div>
                    <Chatting>
                        <div className='chatWrapper'>
                            <div className='sendContents'>
                                <div className='sendContent'>안녕하세요 .</div>
                                <div className='sendContent'>
                                    안녕하세요 반갑습니다 asdas 합니다.
                                    안녕하세요 반갑습니다 asdas 합니다.
                                </div>
                                <div className='sendContent'>
                                    안녕하세요 반갑습니다 asdas 합니다.
                                    안녕하세요 반갑습니다 asdas 합니다.
                                </div>
                            </div>
                            <div className='receiveContents'>
                                <div className='receiveContent'>asdas</div>
                                <div className='receiveContent'>asdas</div>
                            </div>
                        </div>
                        <SendText>
                            <form method='post'>
                                <input
                                    type='text'
                                    // onChange={onChange}
                                    // value={sendText}
                                    placeholder=' 메세지를 입력해주세요'
                                ></input>
                            </form>
                        </SendText>
                    </Chatting>
                </ChatRoom>
            </DIV>
        </>
    );
};
export default Chat;
