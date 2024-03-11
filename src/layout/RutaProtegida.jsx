import { Outlet, Link, Navigate } from "react-router-dom";
import Logo from "../logo/redocean.jpeg";

const RutaProtegida = () => {
  let isLogged = localStorage.getItem("token");
  if (!isLogged) {
    return <Navigate to="/" />;
  }

  const name = localStorage.getItem("name");

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    Navigate("/");
  };
  return (
    <>
      <header>
        <div className="top-0 left-0 w-full z-50 bg-white border-b backdrop-blur-lg ">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-20 justify-between">
              <div className="flex flex-1 items-stretch justify-start">
                <a className="flex flex-shrink-0 items-center" href="#">
                  <img
                    className="block h-20 w-auto"
                    src={Logo}
                  />
                </a>
              </div>
              <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8">

              <Link
              to="/Index"
              className="text-gray-700 hover:text-indigo-700 text-sm font-medium"
            >
              MHD
            </Link>
            <Link
              to="/Mdp"
              className="text-gray-700 hover:text-indigo-700 text-sm font-medium"
            >
              MDP
            </Link>
                <Link
                  to="/"
                  className=" bg-blue-950 text-white hover:bg-red-900 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm "
                  onClick={cerrarSesion}
                >
                  Sign out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <header className="top-0 w-full  z-30 bg-white transition-all">
        <nav className=" max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <img src={Logo} className="h-12 w-auto" />
          </div>
          <div className="col-start-10 col-end-10 font-medium flex justify-end items-center ">
            <p className="text-red-900 font-bold capitalize lg:mr-3 mr-3 lg:text-xl">
              bienvenido <strong>{name}</strong>
            </p>

            <Link
              to="/Mdp"
              className="font-medium  py-2  sm:px-8 border border-red-900 text-red-900 bg-white outline-none rounded-l-full rounded-r-full hover:bg-red-900 hover:text-white  capitalize text-xl mr-2 "
            >
              MDP
            </Link>
            <Link
              to="/Index"
              className="font-medium  py-2 sm:px-8 border border-red-900 text-red-900 bg-white outline-none rounded-l-full rounded-r-full hover:bg-red-900 hover:text-white  capitalize text-xl mr-2 "
            >
              MHD
            </Link>
            <Link
              to="/"
              className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-red-900 text-red-900 bg-white-500 outline-none rounded-l-full rounded-r-full hover:bg-red-900 hover:text-white capitalize text-xl "
              onClick={cerrarSesion}
            >
              sign out
            </Link>
          </div>
        </nav>
      </header> */}
      <Outlet />
    </>
  );
};

export default RutaProtegida;
