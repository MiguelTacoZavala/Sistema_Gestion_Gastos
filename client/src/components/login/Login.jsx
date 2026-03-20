import bankIcon from "../../assets/icons/icon-bank.svg";
import "./Login.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    //Aqui va tu logica chamo

    navigate("/main");
  }
  return (
    <>
      <section className="form-section">
        <header className="form-header">
          <img src={bankIcon} alt="Bank Icon" className="bank-icon" />
          <h1 className="form-header__title">Guardian de gastos</h1>
        </header>
        <h1 className="form-section__title">Inicia sesion</h1>
        <form action="submit" className="login-form">
          <Input
            id="username"
            label="Usuario"
            type="text"
            placeholder="Usuario"
          />
          <Input
            id="password"
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
          />
          <Button text="Iniciar sesion" type="login" onClick={handleLogin}></Button>
        </form>
      </section>
      <section className="welcome-section">
        <div className="content-app">
          <h1>Bienvenido</h1>
          <p>Esto es una pagina diseñada con el propósito de <span>ayudarte a gestionar tus gastos de manera eficiente</span></p>
        </div>
      </section>
    </>
  );
}
