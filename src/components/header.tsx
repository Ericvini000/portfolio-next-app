import NavBar from "./navBar"


const Header = () => {


    return (
        <header className="px-6 py-6 text-gray-100 flex justify-between bg-gray-500 border-b border-primary-100">
            <h1 className="text-base" >Eric Vinicius Felix Silva</h1>

            <NavBar />
        </header>
    )
}


export default Header