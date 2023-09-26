
const Footer = () => {
  return (
    <>

    <footer className="p-4 bg-gray-50 md:p-8 lg:p-10">
        <div className="mx-auto max-w-screen-xl text-center">
        <a href="#" className="flex  justify-center items-center">
        {/* <img className="mr-2 h-14" src={redocean}/> */}
        {/* <img className="mr-2 h-14" src={logo}/> */}
        </a>
        <p className="my-6 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022-2023 <a href="#" className="hover:underline capitalize">red ocean™</a>. All Rights Reserved.</span>
        </div>

    </footer>
    </>
  )
}

export default Footer