import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Login from "../../components/login/login";
import "./styles.scss";

const LoginView = () => {
  const navigate = useNavigate();

    return(
        <>
        <Header />
        <div className="loginRegister">
            <img
                className="loginRegister__img"
                src="images/logoLetrasBlancasSinFondo.png"
                alt="Login image"
            />
            <div className="loginRegister__container">
                <Login/>
                <button className="loginRegister__contentSwitch" onClick={() => {navigate("/register");}}> {"Already have an account? Sign In"} </button>
            </div>
        </div>
        <Footer><></></Footer>
        </>
    )
}

export default LoginView;