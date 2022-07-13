import React, { useState, useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CreateQna = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [view, setView] = useState(0);
  const [inputs, setInputs] = useState({
    name: "",
    contents: "",
    date: "",
    title: "",
    datetime: "",
    view: "",
    password: "",
  });

  const createBoard = async () => {
    let url = `https://my-json-server.typicode.com/ByeongUk-An/showpingmall/board`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inputs.name,
        contents: inputs.contents,

        title: inputs.title,

        view: 0,
        password: inputs.password,
      }),
    });
    navigate("/qna");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.name;
    const contents = e.target.name;
    const author = e.target.name;
    const password = e.target.name;
  };

  const handleOnChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h1 className="board-create-title">게시글 작성</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={2}></Col>
          <Col lg={8}>
            <form className="form-wrap" onSubmit={handleSubmit} onChange={handleOnChange}>
              <label className="form-label">제목</label>
              <input type="text" placeholder="제목을 작성해주세요." className="form-input" name="title" />
              <label className="form-label">작성자</label>
              <input type="text" placeholder="이름을 작성해주세요." className="form-input" name="name" />

              <Col lg={12} className="board-btn-wrapper">
                <Button variant={"danger"} className="list-move" onClick={() => navigate("/qna")}>
                  목록으로
                </Button>
                <Button variant={"danger"} onClick={createBoard}>
                  등록하기
                </Button>
              </Col>
            </form>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateQna;
