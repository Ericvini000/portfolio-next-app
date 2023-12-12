import { AiOutlineBars } from "react-icons/ai";

const NavBar = () => {
    return (
        <nav>
            <AiOutlineBars className="text-2xl font-bold md:hidden" />
            <button className="hidden md:flex">Home</button>
            <button className="hidden md:flex">Projetos</button>
            <button className="hidden md:flex">Contatos</button>
        </nav>
    )
}

export default NavBar