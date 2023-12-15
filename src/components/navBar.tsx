import Link from "next/link";
import { AiOutlineBars } from "react-icons/ai";

const NavBar = () => {
    return (
        <nav className="w-6 md:w-[40%] flex items-center justify-center md:gap-4">
            <AiOutlineBars className="text-2xl font-bold md:hidden" />
            <Link href={"#top"} className="hidden md:flex hover:text-gray-200 link_underline p-1 px-3 after:hover:left-4">
                Sobre mim
            </Link>
            <Link href={"#projects"} className="hidden md:flex hover:text-gray-200 link_underline p-1 px-3 after:hover:left-4">
                Projetos
            </Link>
            <Link href={"#contact"} className="hidden md:flex hover:text-gray-200 link_underline p-1 px-3 after:hover:left-4">
                Contato
            </Link>
        </nav>
    )
}

export default NavBar