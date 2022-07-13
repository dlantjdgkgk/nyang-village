import React from "react";
import { Body } from "./style";
import useLogin from "./useHook";

const Login = () => {
  const { handleSubmit, onChange, id, password } = useLogin();

  return (
    <>
      <Body>
        <div className="wireframe">
          <div className="logoDescription">
            <img src="./img/Home.png"></img>
            <span className="projectName">#NYANG VILLAGE</span>
          </div>
          <div className="greeting">
            <p>welcome</p>
            <hr></hr>
          </div>
          <form method="post" action="/" onSubmit={handleSubmit}>
            <div className="login">
              <input type="text" placeholder="ID" name="id" value={id} onChange={onChange} />
              <img src="./img/User.png"></img>
            </div>
            <div className="password">
              <input type="password" placeholder="PASSWORD" name="password" value={password} onChange={onChange} />
              <img src="./img/Lock.png"></img>
            </div>
            <div className="loginBtn">
              <button>Login</button>
              <img src="./img/Button.png"></img>
            </div>
          </form>
        </div>
      </Body>
    </>
  );
};

export default Login;
