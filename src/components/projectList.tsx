import ProjectListItem from "./projectListItem"


const ProjectList = () => {

    //TODO consertar o flex da lista com muitos itens

    return (
        <ul className="flex flex-col gap-8 flex-wrap overflow-auto max-h-[720px]">
            <ProjectListItem />
        </ul>
    )
}

export default ProjectList