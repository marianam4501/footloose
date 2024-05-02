import "./styles.scss";
import { FC, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { users } from "../../mockData/userData";

interface LoginProps {
  //children: React.ReactNode;
}

const Login: FC<LoginProps> = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);
  const [goHome, setGoHome] = useState<boolean>(false);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>(
    "There is no error message."
  );
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  function setUsernameValue(usernameInput: string) {
    const expresionRegular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (expresionRegular.test(usernameInput)) {
      setUsername(usernameInput);
      setShowErrorMessage(false);
    } else {
      setUsername("");
      setErrorMessage("The username is not an email address.");
      setShowErrorMessage(true);
    }
  }

  function setPasswordValue(passwordInput: string) {
    setPassword(passwordInput);
  }

  useEffect(() => {
    if (username != "" && password != "") {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [username, password]);

  function handleLogIn() {
    //Hacer validacion, llamar al endpoint
    const response = verifyUser();
    if (response) {
      setGoHome(true);
      localStorage.setItem("token", "lksdfjlakdjklajdkf");
      localStorage.setItem("user", username);
    } else {
      setGoHome(false);
      setErrorMessage("Your username or password is incorrect.");
      setShowErrorMessage(true);
    }
  }

  function verifyUser() {
    const foundUser = users.find((user) => user.username === username);

    // Check if user is found and password matches
    if (foundUser && foundUser.password === password) {
      return true; // Login successful
    }
    return false; // Invalid username or password
  }

  useEffect(() => {
    if (goHome) {
      navigate("/");
    }
  }, [goHome, navigate]);

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [navigate, token]);

  return (
    <div className="login">
      <div className="login__container">
        <img
          className="login__image"
          src="images/hero-image2.jpg"
          alt="Login image"
        />
        <div className="login--flex">
          {showErrorMessage && (
            <p className="login__errorMsg">{errorMessage}</p>
          )}
          <Form className="login__form">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="mb-3"
                type="email"
                placeholder="Enter your email"
                /*value={username}*/
                onChange={(e) => setUsernameValue(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPasswordValue(e.target.value)}
              />
            </Form.Group>

            <Button
              id="btn"
              className="my-3"
              variant="primary"
              onClick={handleLogIn}
              disabled={submitDisabled}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
