'use client'
import Link from "next/link"
import { FaGithub } from "react-icons/fa"


interface Props {
    name: string;
    html_url: string;
    description: string | undefined | null;
    language: string | null;
    app_url?: string | null | undefined;
}

const ProjectListItem = ({ project }: { project: Props }) => {



    return (
        <li className="flex flex-col gap-4 lg:w-[48%]">
            <h2 className="text-2xl font-bold">{project.name}</h2>
            <span className="text-gray-300">Linguagem: {project.language ? project.language : "Linguagem não fornecida"}</span>
            <p className="text-gray-300 text-base">
                {project.description ? project.description : "Descrição não fornecida"}
            </p>
            <div className="flex gap-2 lg:gap-12">
                <Link
                    className="px-12 py-4 group transition duration-300 hover:transition  hover:bg-gray-500 hover:text-gray-100 h-12  border rounded-xl relative border-gray-100 bg-gray-100 text-gray-400 flex items-center justify-center gap-2"
                    target="blank"
                    href={project.html_url}>
                    <div className="w-7 h-7 absolute top-2 left-2">
                        <FaGithub className="fill-gray-500 group-hover:fill-gray-100 w-full h-full" />
                    </div>
                    Código
                </Link>

                {project.app_url ?
                    <Link className="link_underline"
                        target="blank"
                        href={project.app_url}>
                        Aplicação
                    </Link>
                    :
                    null
                }
            </div>
        </li>
    )
}


export default ProjectListItem