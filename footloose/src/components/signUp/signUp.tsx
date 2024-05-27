import axios from "axios";
import "./styles.scss";
import { FC, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

interface SignUpProps {
  //children: React.ReactNode;
}

const SignUp: FC<SignUpProps> = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);
  const [redirect, setRedirect] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  function setUsernameValue(usernameInput: string) {
    const expresionRegular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (expresionRegular.test(usernameInput)) {
      setUsername(usernameInput);
      setErrors({ ...errors, username: "" });
    } else {
      setUsername("");
      setErrors({
        ...errors,
        username: "The username is not an email address.",
      });
    }
  }

  function setFullNameValue(fullNameInput: string) {
    if (fullNameInput.trim().length > 0) {
      setFullName(fullNameInput);
      setErrors({ ...errors, fullName: "" });
    } else {
      setErrors({ ...errors, fullName: "Full name is required." });
      setFullName("");
    }
  }

  function setPasswordValue(passwordInput: string) {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/;
    if (regex.test(passwordInput)) {
      setPassword(passwordInput);
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({
        ...errors,
        password:
          "The password must contain at leaste 7 characters, one digit, one symbol and one capital letter.",
      });
      setPassword("");
    }
  }

  function setConfirmPasswordValue(passwordInput: string) {
    if (password === passwordInput) {
      setConfirmPassword(passwordInput);
      setErrors({ ...errors, confirmPassword: "" });
    } else {
      setErrors({
        ...errors,
        confirmPassword: "The password does not match with the entered before.",
      });
      setConfirmPassword("");
    }
  }

  useEffect(() => {
    if (username && password && confirmPassword && fullName) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [username, password, confirmPassword, fullName]);

  function handleSignUp() {
    // Crear el objeto de datos para enviar al servidor
    const userData = {
      email: username,
      password: password,
      fullName: fullName
    };
  
    // Realizar la solicitud POST al endpoint
    axios.post('http://localhost:8080/auth/signup', userData)
      .then(() => {
        // Si la solicitud es exitosa y no hay errores
        // Redirigir al usuario a la página de inicio de sesión
        setRedirect(true);
        toast.success("User registered successfully. You can now login.");
      })
      .catch(error => {
        // Si hay un error en la solicitud
        // Verificar si el error es debido a que ya existe un usuario con ese correo
        if (error.response) {
          // Usuario ya existe, mostrar un mensaje de error al usuario
          toast.error("A user with that email already exists.");
        } 
      });
  }

  useEffect(() => {
    if (redirect) {
      navigate("/");
    }
  }, [redirect, navigate]);

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [navigate, token]);

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
          <Form.Label className="login__label">Email address</Form.Label>
          {/*className="login__label"*/}
          <Form.Control
            className=""
            type="email"
            placeholder="Enter your email"
            /*value={username}*/
            onChange={(e) => setUsernameValue(e.target.value)}
            isInvalid={!!errors.username}
          />
          <Form.Control.Feedback type="invalid">
            {errors.username}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicFullName" className="mb-3">
          <Form.Label className="login__label">Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            onChange={(e) => setFullNameValue(e.target.value)}
            isInvalid={!!errors.fullName}
          />
          <Form.Control.Feedback type="invalid">
            {errors.fullName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mb-3">
          <Form.Label className="login__label">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            /*value={password}*/
            onChange={(e) => setPasswordValue(e.target.value)}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="login__label">Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm your password"
            /*value={password}*/
            onChange={(e) => setConfirmPasswordValue(e.target.value)}
            isInvalid={!!errors.confirmPassword}
          />
          <Form.Control.Feedback type="invalid">
            {errors.confirmPassword}
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          id="btn"
          className="my-3"
          variant="primary"
          onClick={handleSignUp}
          disabled={submitDisabled}
        >
          Sign up
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
