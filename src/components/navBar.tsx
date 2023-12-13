import { AiOutlineBars } from "react-icons/ai";

const NavBar = () => {
    return (
        <nav className="w-6 md:w-52 flex items-center justify-center md:justify-between">
            <AiOutlineBars className="text-2xl font-bold md:hidden" />
            <button className="hidden md:flex">Home</button>
            <button className="hidden md:flex">Projetos</button>
            <button className="hidden md:flex">Contatos</button>
        </nav>
    )
}

export default NavBar