import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alerta from "../components/Alerta";
import axiosUsers from "../config/axios";

///REALIZAR CAMBIOOOOOOOOOS PENDIENTES !!! LOGIN PROVIDER CONTEXT INDEPENDIENTE

const Login = () => {
  // const {login,handleLogin,submitLogin} = useLoginRegister()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [alerta, setAlerta] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([email, password].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    const login = new FormData();
    login.append("email", email);
    login.append("password", password);

    try {
      const { data } = await axiosUsers({
        method: "post",
        url: "/login",
        data: login,
        headers: {
          "Content-Type": "multipart/",
        },
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("name", data.name);
      navigate("/index");
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };
  const { msg } = alerta;

  return (
    <>
    <div className="mb-10 text-center mt-36">
          <h1 className="capitalize font-bold text-4xl text-blue-950">
            red ocean{" "}
            <span className="block text-red-800 text-8xl uppercase">homme</span>
          </h1>
          <p className="text-2xl font-bold text-blue-950">
            Hydrodynamic Ocean Models for Maritime Emergencies
          </p>
        
      <div className=" mt-16 relative mx-auto  max-w-md  px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10  flex justify-center items-center ">
        
        <div className="w-full">
          
          <div className="text-center">
            <h1 className="text-2xl font-bold text-blue-950">Sign in</h1>

            <p className="mt-2 text-blue-950">
              Sign in below to access your account
            </p>
          </div>
          <div className="mt-5">
            <form onSubmit={handleSubmit}>
              <div className="relative mt-3">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  placeholder="Email Address"
                  className="peer mt-1 w-full border-b-2 border-blue-950 px-0 py-1 placeholder:text-transparent focus:border-blue-900 focus:outline-none"
                  autoComplete="NA"
                />
                <label
                  forhtml="email"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-blue-950 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-950 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-blue-950"
                >
                  Email Address
                </label>
              </div>
              <div className="relative mt-5">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="peer peer mt-1 w-full border-b-2 border-blue-950 px-0 py-1 placeholder:text-transparent focus:border-blue-900 focus:outline-none"
                />
                <label
                  forhtml="password"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-blue-950 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-950 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-blue-950"
                >
                  Password
                </label>
              </div>
              {msg && <Alerta alerta={alerta} />}
              <div className="my-6">
                <button
                  type="submit"
                  className="w-full rounded-md bg-blue-950 px-1 py-2 text-white focus:bg-gray-600 focus:outline-none hover:bg-blue-900"
                >
                  Sign in
                </button>
              </div>
              <p className="text-center text-sm text-blue-950">
                Don&#x27;t have an account yet?
                <Link
                  to="/registrar"
                  className="font-semibold text-blue-950 hover:underline focus:text-blue-950 focus:outline-none hover:text-blue-900"
                > Sign up</Link>

              </p>
            </form>
          </div>
        </div>
        </div>
      </div>
      {/* <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="mb-10 text-center">
          <h1 className="capitalize font-bold text-4xl">
            red ocean{" "}
            <span className="block text-red-700 text-8xl uppercase">homme</span>
          </h1>
          <p className="text-2xl font-bold">
            Hydrodynamic Ocean Models for Maritime Emergencies
          </p>
        </div>
        <div className="rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-red-900 w-80">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-white md:text-lg text-center">
              Account
            </h1>
            {msg && <Alerta alerta={alerta} />}

            <form className="space-y-2 md-space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1"
                  placeholder="name@company.com"
                  required=""
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-1"
                  required=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full text-black bg-white hover:bg-red-300 font-medium rounded-lg text-sm  py-1 text-center"
              >
                Sign in
              </button>
              <p className="text-sm font-medium text-white ">
                Don’t have an account yet? {""}
                <Link
                  to="/registrar"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Login;
