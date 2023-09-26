import { useState, useEffect } from "react";
import Logo from '../logo/logo.png'
import {Link as LinkScroll} from 'react-scroll'
// import Link from 'next/link'
import {Link} from 'react-router-dom'

const InicioHeader = () => {
    const [activeLink, setActiveLink] = useState(null);
    const [scrollActive, setScrollActive] = useState(false);
    
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScrollActive(window.scrollY > 20);
      });
    }, []);
  return (
    <>
    <header className={"fixed top-0 w-full  z-30 bg-gray-50 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-2")}>
  
  {/* Navegacion */}
      <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
        <div className="col-start-1 col-end-2 flex items-center">
          <img src={Logo} className="h-12 w-auto"/>
        </div>

        <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
        <LinkScroll
              activeClass="active"
              to="mision"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("mision");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative capitalize text-xl" +
                (activeLink === "mision"
                  ? " text-red-900 animation-active "
                  : " text-black-500 hover:text-red-900")
              }
            >
              Mision
            </LinkScroll>

            <LinkScroll
              activeClass="active"
              to="tecnologia"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("tecnologia");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative capitalize text-xl" +
                (activeLink === "tecnologia"
                  ? " text-red-900 animation-active "
                  : " text-black-500 hover:text-red-900 ")
              }
            >
              tecnologia
            </LinkScroll>

        <LinkScroll
              activeClass="active"
              to="equipo"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("equipo");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative capitalize text-xl" +
                (activeLink === "equipo"
                  ? " text-red-900 animation-active "
                  : " text-black-500 hover:text-red-900")
              }
            >
              equipo
            </LinkScroll>


            <LinkScroll
              activeClass="active"
              to="contacto"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("contacto");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative capitalize text-xl" +
                (activeLink === "contacto"
                  ? " text-red-900 animation-active "
                  : " text-black-500 hover:text-red-900 ")
              }
            >
             contacto
            </LinkScroll>
        </ul>
        <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link to="/registrar" className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-red-900 transition-all text-xl" disabled> sign up</Link>
            <Link to='/login' className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-red-900 text-red-900 bg-white-500 outline-none rounded-l-full rounded-r-full hover:bg-red-900 hover:text-white transition-all hover:shadow-orange capitalize text-xl">sign in
            </Link>
        </div >
      </nav>
    </header>












    {/* VERSION CELULAR */}

    <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t bg-gray-50 ">
        <div className="sm:px-3">
          <ul className="flex w-full justify-between items-center text-red-900">
            <LinkScroll
              activeClass="active"
              to="mision"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("mision");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all capitalize " +
                (activeLink === "mision"
                  ? "  border-red-900 text-red-900"
                  : " border-transparent")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              mision
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="tecnologia"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("tecnologia");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all capitalize " +
                (activeLink === "tecnologia"
                  ? "  border-red-900 text-red-900"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              tecnologia
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="equipo"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("equipo");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all capitalize " +
                (activeLink === "equipo"
                  ? "  border-red-900 text-red-900"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              equipo
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="contacto"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("contacto");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all capitalize " +
                (activeLink === "contacto"
                  ? "  border-red-900 text-red-900"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              contacto
            </LinkScroll>
          </ul>
        </div>
      </nav>
</>
  )
}

export default InicioHeader