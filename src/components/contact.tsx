import ContactList from './contactList';


const Contact = () => {
    return (
        <section className="mx-6 flex flex-col gap-8 lg:flex-row lg:justify-between lg:mx-36 mt-16" >
            <div className="flex flex-col gap-4 lg:gap-12 lg:w-[50%]">
                <h1 className="text-2xl/9 font-bold lg:w-[75%]">Que tal conversar um pouco e tirar as <span className="text-primary-100">ideias</span> do papel <span className="text-primary-100">agora mesmo</span>?</h1>

                <q className="text-gray-300 text-sm/6"> Na jornada do desenvolvimento web, a criatividade é nossa bússola. Cada linha de código é um passo em direção à inovação. Cada função criada, cada aplicativo lançado, é um reflexo de uma ideia que tivemos a coragem de tirar do papel. Não temos medo de errar, pois cada erro é uma oportunidade de aprendizado.</q>
            </div>

            <ContactList />
        </section>
    )
}



export default Contact