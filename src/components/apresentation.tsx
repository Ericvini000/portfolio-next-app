import Image from "next/image"
import profileImage from '@/assets/img/profile_img.png';
import SocialMedias from "./socialMedias";


const Apresentation = () => {
    return (
        <section className="mx-6 lg:pt-8 lg:mx-36">
            <div className="h-10 flex items-center gap-6 text-gray-200 my-10">
                <div className="w-12 h-12 rounded-full bg-gray-100">
                    <Image className="w-12 h-12 rounded-full object-cover" src={profileImage} alt="Profile image" />
                </div>
                <span>Oi, me chamo Eric Vinicius Felix Silva</span>
            </div>
            <div className="my-10 flex flex-col gap-6">
                <q className=" text-4xl lg:text-5xl font-bold">Dream, program and make it <span className="text-primary-100 text-bold">real</span></q>
                <span className="text-gray-300 text-left text-base/loose my-4">
                    Tenho 19 anos e moro em Ariquemes-RO, Brasil. Curso Engenharia de software e busco por oportunidades,
                    Procuro não apenas um trabalho mas uma carreira como Desenvolvedor no mercado de trabalho, idealizando, arquitetando e desenvolvendo sites, api`s e
                    outros sistemas, aprofundando meus conhecimentos cada vez mais e acima de tudo criando novos laços duradouros durante minha jornada.</span>
                <div className="flex gap-3.5 lg:gap-16 items-center">
                    <button className="px-4 py-3 w-[35%] lg:w-52 bg-primary-100 focus:none hover:bg-primary-50 transition hover:transition rounded-md">Ver projetos</button>
                    <SocialMedias />
                </div>
            </div>
        </section>
    )
}



export default Apresentation