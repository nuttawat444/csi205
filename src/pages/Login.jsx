import { useRef } from "react";
import Form from "react-bootstrap/Form";
import { verifyUser } from "../data/users";
import "./Login.css";

function Login({ setToken, setRole }) {
  const userRef = useRef();
  const passRef = useRef();

  const handleLogin = () => {
    const user = userRef.current.value.trim();
    const pass = passRef.current.value.trim();
    const userinfo = verifyUser(user, pass);

    userRef.current.value = "";
    passRef.current.value = "";

    if (userinfo === null) {
      alert("❌ Wrong username or password");
      userRef.current.focus();
    } else {
      setToken(userinfo.token);
      setRole(userinfo.role);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container shadow-lg p-4 rounded">
        <h2 className="login-title mb-4">Hello world</h2>

        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="user"
            title="type : user"
            ref={userRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="pass"
            title="type : pass"
            ref={passRef}
          />
        </Form.Group>

        <button className="btn-login" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
