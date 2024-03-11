import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import axiosUsers from "../config/axios";


const Registrar = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [alerta, setAlerta] = useState({});

  const submit = async (e) => {
    e.preventDefault();

    if ([name, email, password].includes("")) {
      setAlerta({ msg: "Hay Campos Vacios", error: true });
      return;
    }
    if (password.length < 8) {
      setAlerta({ msg: "Password Minimo 8 Caracteres", error: true });
      return;
    }
    setAlerta({});

    const registar = new FormData();
    registar.append("name", name);
    registar.append("email", email);
    registar.append("password", password);

    try {
      const respuesta = await axiosUsers({
        method: "post",
        url: "/register",
        data: registar,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(respuesta)
      // setAlerta({
      //   msg: "Usuario Creado Correctamente",
      //   error: false,
      // });
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
            <h1 className="text-2xl font-bold text-blue-950 capitalize">sign up</h1>

            <p className="mt-2 text-blue-950 capitalize">
              create your account
            </p>
          </div>
          <div className="mt-5">
            <form onSubmit={submit}>
              <div className="relative mt-3">
                <input
                  type="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  placeholder="Users"
                  className="peer mt-1 w-full border-b-2 border-blue-950 px-0 py-1 placeholder:text-transparent focus:border-blue-900 focus:outline-none"
                  autoComplete="NA"
                />
                <label
                  forhtml="email"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-blue-950 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-950 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-blue-950"
                >
                  User
                </label>
              </div>
              <div className="relative mt-3">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  placeholder="email"
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
                  className="capitalize w-full rounded-md bg-blue-950 px-1 py-2 text-white focus:bg-gray-600 focus:outline-none hover:bg-blue-900"
                >
                  sign up
                </button>
              </div>
              <p className="text-center text-sm text-blue-950">
              Already have an account?  {''}
                <Link
                  to="/"
                  className="capitalize font-semibold text-blue-950 hover:underline focus:text-blue-950 focus:outline-none hover:text-blue-900"
                > login</Link>

              </p>
            </form>
          </div>
        </div>
        </div>
      </div>


      {/* <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0">
        <div className="mb-10 text-center">
          <h1 className="capitalize font-bold text-5xl">
            red ocean{" "}
            <span className="block text-red-700 text-9xl uppercase">homme</span>
          </h1>
          <p className="text-3xl font-bold">
            Hydrodynamic Ocean Models for Maritime Emergencies
          </p>
        </div>
        <div className="w-full rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 bg-red-900">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white text-center">
              Create Account
            </h1>
            {msg && <Alerta alerta={alerta} />}
            <form className="space-y-4 md:space-y-6" onSubmit={submit}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  User
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                  placeholder="Users"
                  required=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                  placeholder="name@company.com"
                  required=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                  placeholder="*********"
                  required=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-red-400"
              >
                Create an account
              </button>
              <p className="text-sm  text-white font-medium">
                Already have an account? {""}
                <Link
                  to="/"
                  className="font-medium text-white hover:underline capitalize"
                >
                  login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Registrar;
