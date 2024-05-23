
//import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import SignUp from "../../components/signUp/signUp";
import "./styles.scss";

const RegisterView = () => {
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
                <SignUp />
                <button className="loginRegister__contentSwitch" onClick={() => navigate("/login")}> Create an account </button>
            </div>
        </div>
        <Footer><></></Footer>
        </>
    )
}

export default RegisterView;