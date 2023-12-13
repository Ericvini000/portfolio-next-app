import NavBar from "./navBar"


const Header = () => {

    return (
        <header className="px-6 py-4 md:px-10 lg:py-6 lg:px-36 fixed top-0 left-0 right-0 flex justify-between items-center bg-gray-500 border-b border-primary-100 z-20">
            <h1 className="text-xl text-thin tracking-widest w-16">Eric</h1>

            <NavBar />
        </header>
    )
}


export default Header