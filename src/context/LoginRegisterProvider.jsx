import { createContext, useState, children } from "react";
import { useNavigate } from "react-router-dom";
import FormData from "form-data";
import axiosUsers from "../config/axios";

const LoginRegisterContext = createContext();

export const LoginRegisterProvider = ({ children }) => {
  //Login Datos
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [Token, setToken] = useState({});
  //HandleLogin
  const handleLogin = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };
  //Submit Login
  const submitLogin = () => {
    let data = new FormData();
    data.append("email", login.email);
    data.append("password", login.password);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "/login",
      headers: {
        // ...data.getHeaders()
      },
      data: data,
    };

    axiosUsers
      .request(config)
      .then((response) => {
        setToken(response.data);
        localStorage.setItem("name", Token.name);
        localStorage.setItem("token", Token.token);
      }).catch((error) => {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
      });
      navigate("/index");
  };

  return (
    <>
      <LoginRegisterContext.Provider
        value={{
          login,
          setLogin,
          handleLogin,
          submitLogin,
          Token,
        }}
      >
        {children}
      </LoginRegisterContext.Provider>
    </>
  );
};

export default LoginRegisterContext;
