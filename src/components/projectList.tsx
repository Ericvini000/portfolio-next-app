import { TRepositoryArray } from '@/schemas/repository.schema';
import { fetchRepositories } from './fetchs';
import ProjectListItem from "./projectListItem"


const ProjectList = async () => {

    const repos: TRepositoryArray = await fetchRepositories();

    return (
        <ul className="flex flex-col lg:flex-row lg:gap-y-16 lg:flex-wrap gap-8 overflow-auto max-h-[600px] scrollbar scrollbar-thin scrollbar-track-gray-400 scrollbar-track-rounded-md scrollbar-thumb-primary-100">
            {
                repos.map((element, index) => (
                    <ProjectListItem key={index + 1} name={element.name} description={element.description} html_url={element.html_url} app_url={"app"} language={element.language} />
                ))
            }
        </ul>
    )
}

export default ProjectList