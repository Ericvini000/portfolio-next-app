
import Link from "next/link";
import SocialMedias from "./socialMedias";


const Apresentation = () => {
    return (
        <section className="mx-6 lg:py-16 lg:mx-36">
            <div className="my-10 flex flex-col gap-4 lg:gap-8">
                <q className=" text-4xl lg:text-4xl font-bold">Dream, program and make it <span className="text-primary-100 text-bold">real</span></q>
                <span className="text-gray-300 text-left text-base/loose my-4">
                    Tenho 19 anos e moro em Ariquemes-RO, Brasil, curso Engenharia de software e busco por oportunidades,
                    Procuro não apenas um trabalho mas uma carreira como Desenvolvedor no mercado de trabalho, idealizando, arquitetando e desenvolvendo sites, api`s e
                    outros sistemas, aprofundando meus conhecimentos cada vez mais e acima de tudo criando novos laços através de grupos, eventos e contribuições para a comunidade de TI durante minha jornada.</span>
                <div className="flex gap-3.5 lg:gap-16 lg:mt-16 items-center">
                    <Link href={"#projects"} className="px-4 py-3 w-[35%] lg:w-52 bg-primary-100 focus:none hover:bg-primary-50 transition hover:transition rounded-md flex justify-center items-center ">Ver projetos</Link>
                    <SocialMedias />
                </div>
            </div>
        </section>
    )
}



export default Apresentation