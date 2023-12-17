'use client'
import usePortfolio from "@/hooks/usePortfolio";
import { TRepository } from "@/schemas/repository.schema";
import Link from "next/link"
import { FaGithub } from "react-icons/fa"

const ProjectListItem = ({ project }: { project: TRepository }) => {

    const { loadProjects } = usePortfolio()
    const projectItem = loadProjects(project)

    return (
        <li className="flex flex-col gap-4 lg:w-[48%]">
            <h2 className="text-2xl font-bold">{projectItem.name}</h2>
            <p className="text-gray-300">Linguagem: <span className="bg-gray-400 px-2 py-0.5 rounded-md text-primary-100">{projectItem.language || "Linguagem não fornecida"}</span>
            </p>
            <p className="text-gray-300 text-base">
                {projectItem.description ? projectItem.description : "Descrição não fornecida"}
            </p>
            <div className="flex gap-2 lg:gap-12">
                <Link
                    className="px-12 py-4 group transition duration-300 hover:transition  hover:bg-gray-500 hover:text-gray-100 h-12  border rounded-xl relative border-gray-100 bg-gray-100 text-gray-400 flex items-center justify-center gap-2"
                    target="blank"
                    href={projectItem.html_url}>
                    <div className="w-7 h-7 absolute top-2 left-2">
                        <FaGithub className="fill-gray-500 group-hover:fill-gray-100 w-full h-full" />
                    </div>
                    Código
                </Link>

                {projectItem.app_url ?
                    <Link className="link_underline"
                        target="blank"
                        href={projectItem.app_url}>
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