import Link from "next/link"
import { FaGithub } from "react-icons/fa"


const ProjectListItem = () => {
    return (
        <li className="flex flex-col gap-4 lg:w-[48%]">
            <h2 className="text-2xl font-bold">QuickStart</h2>
            <span className="text-gray-300">Linguagens: Javascript</span>
            <p className="text-gray-300 text-base">
                Descrição sobre a finalidade da aplicação e como está organizado o repositório...
            </p>
            <div className="flex gap-2 lg:gap-12">
                <Link
                    className="px-12 py-4 group hover:bg-gray-400 hover:text-gray-100 h-12  border rounded-xl relative border-gray-100 bg-gray-100 text-gray-400 flex items-center justify-center gap-2"
                    target="blank"
                    href={"https://github.com/Ericvini000/portfolio-next-app"}>
                    <div className="w-7 h-7 absolute top-2 left-2">
                        <FaGithub className="fill-gray-400 group-hover:fill-gray-100 w-full h-full" />
                    </div>
                    Code
                </Link>
                <Link className="link_underline"
                    target="blank"
                    href={"https://www.google.com/webhp?hl=pt-BR&ictx=2&sa=X&ved=0ahUKEwj--IOJi4uDAxXZupUCHSFlAGAQPQgJ"}>
                    Aplicação
                </Link>
            </div>
        </li>
    )
}


export default ProjectListItem