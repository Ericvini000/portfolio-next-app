import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const SocialMedias = () => {
    return (
        <>
            <Link href={"https://github.com/Ericvini000"} target="blank" className="w-12 h-12">
                <FaGithub className="w-full h-full fill-gray-100 hover:-translate-y-2 duration-300 hover:duration-300 hover:fill-gray-200 hover:transition transition" />
            </Link>
            <Link href={"https://www.linkedin.com/in/eric-vinicius-felix-silva-457b63249/"} target="blank" className="w-12 h-12">
                <FaLinkedinIn className="w-full h-full fill-gray-100 hover:-translate-y-2 duration-300 hover:duration-300 hover:fill-social-linkdn hover:transition transition" />
            </Link>
            <Link href={"https://www.facebook.com/eric.felixsilva?locale=pt_BR"} target="blank" className="w-12 h-12">
                <FaFacebook className="w-full h-full fill-gray-100 hover:-translate-y-2 duration-300 hover:duration-300 hover:fill-social-face hover:transition transition" />
            </Link>
            <Link href={"https://www.instagram.com/_ericvini_/"} target="blank" className="w-12 h-12">
                <FaInstagram className="w-full h-full fill-gray-100 hover:-translate-y-2 duration-300 hover:duration-300 hover:fill-social-insta hover:transition transition" />
            </Link>

        </>
    )
}


export default SocialMedias