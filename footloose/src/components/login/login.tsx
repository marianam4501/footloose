import "./styles.scss";
import { FC, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
//import { users } from "../../mockData/userData";
import { ToastContainer, toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { userState } from "../../atoms/userState";
import axios from "axios";

interface LoginProps {
  //children: React.ReactNode;
}

const Login: FC<LoginProps> = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>(
    "There is no error message."
  );
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);

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

  async function handleLogIn() {
      setSubmitDisabled(true);
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email: username,
        password: password
      });
      if (response.status === 200) {
        const token = response.data.token;
        // console.log(response.data);
        try {
          const response2 = await axios.get("http://localhost:8080/user/me", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

          if(response2.status == 200){
            setUser({
              id: response2.data.id,
              username: response2.data.email,
              token: token,
              role: response2.data.role.id,
            });
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    } catch (error) {
      toast.error("Your username or password is incorrect.");
    }
  }

  useEffect(() => {
    if (user.token !== "") {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <div className="login">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            pauseOnHover={true}
            closeButton={true}
            hideProgressBar={true}
          />
          <Form className="login__form">
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label className="login__label">Email address</Form.Label>{/*className="login__label"*/}
              <Form.Control
                className=""
                type="email"
                placeholder="Enter your email"
                /*value={username}*/
                onChange={(e) => setUsernameValue(e.target.value)}
                isInvalid={showErrorMessage}
              />
              <Form.Control.Feedback type="invalid">
                {errorMessage}
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group controlId="formBasicPassword">
              <Form.Label className="login__label">Password</Form.Label>{/*className="login__label"*/}
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
              onClick={handleLogIn}
              disabled={submitDisabled}
            >
              Sign in
            </Button>
          </Form>
    </div>
  );
};

export default Login;
