import React, { useState } from 'react';
import { Navbar } from './style';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { BoardContents, BoardHeader } from './style';

const QnA = () => {
    const navigate = useNavigate();
    const [productList, setProductList] = useState([]);
    const [limit, setLimit] = useState(10);

    return (
        <>
            <header>
                <Navbar>
                    <img src='./img/Home.png'></img>
                    <ul>
                        <li>
                            <button>로그아웃</button>
                        </li>
                    </ul>
                </Navbar>
            </header>

            <Container>
                <Row>
                    <BoardHeader>
                        <Col lg={11}>
                            <h1 className='boardTitle'>Q&A</h1>
                        </Col>
                        <Col lg={1} className='boardButton'>
                            <button onClick={() => navigate('/createQnA')}>
                                글쓰기
                            </button>
                        </Col>
                    </BoardHeader>
                </Row>
                <Row>
                    <BoardContents>
                        <Col lg={1}>
                            <div>No</div>
                        </Col>
                        <Col lg={8}>
                            <div>글제목</div>
                        </Col>
                        <Col lg={1}>
                            <div>작성자</div>
                        </Col>
                        <Col lg={1}>
                            <div>조회수</div>
                        </Col>
                        <Col lg={1}>
                            <div>작성일</div>
                        </Col>
                    </BoardContents>
                </Row>

                {/* <ul className='board-container'>
                                {productList &&
                                    productList
                                        .slice(offset, offset + limit)
                                        .map((list, index) => {
                                            return (
                                                <BoardList
                                                    key={index}
                                                    list={list}
                                                    index={
                                                        productList.length -
                                                        index
                                                    }
                                                />
                                            );
                                        })}
                            </ul> */}
            </Container>
        </>
    );
};

export default QnA;
