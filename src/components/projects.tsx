import ProjectList from "./projectList";


const Projects = () => {
    return (
        <section className="py-16 px-6 w-full h-full lg:max-h-[720px] lg:px-36 flex flex-col gap-4 bg-gray-500">
            <div className="mb-8 flex flex-col justify-between h-16">
                <h1 className="text-lg font-bold">Meus projetos</h1>
                <span className="text-gray-300 text-sm">Projetos criados na <span className="text-secondary-100">Kenzie Academy</span></span>
            </div>

            <ProjectList />
        </section>
    )
}


export default Projects