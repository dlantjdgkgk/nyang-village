import React from 'react';
import { Navbar } from './style';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row, Button } from 'react-bootstrap';

const QnA = () => {
    const navigate = useNavigate();

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

            <Container className='qna-container'>
                <Row>
                    <Col lg={12}>
                        <h2 className='board-title'>Q&A게시판</h2>
                    </Col>
                    <Col lg={12}>
                        <div className='board-wrap'>
                            <div className='board-header'>
                                <Col lg={1}>
                                    <p className='list'>No</p>
                                </Col>
                                <Col lg={7}>
                                    <p className='contents'>제목</p>
                                </Col>
                                <Col lg={2}>
                                    <p className='list'>글쓴이</p>
                                </Col>
                                <Col lg={1}>
                                    <p className='list'>작성일자</p>
                                </Col>
                                <Col lg={1}>
                                    <p className='list'>조회수</p>
                                </Col>
                            </div>
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
                        </div>
                        <Col lg={12} className='board-btn-wrap'>
                            <Button
                                variant='info'
                                className='qna-btn'
                                onClick={() => navigate('/board')}
                            >
                                글 작성
                            </Button>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default QnA;
