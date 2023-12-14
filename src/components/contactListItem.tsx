import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

interface Props {
    icon: string;
    bgColor: string;
    title: string;
    description: string;
    button: string;
}


const ContactListItem = ({ icon, bgColor, title, description, button }: Props) => {

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "whatsapp":
                return <FaWhatsapp className="w-[75px] h-[75px]" />
            case "email":
                return <MdEmail className="w-[75px] h-[75px]" />
            case "linkedin":
                return <FaLinkedin className="w-[75px] h-[75px]" />
        }
    }


    return (
        <li className="flex gap-8">
            <div className={`w-[80px] h-[80px] ${bgColor} rounded-md flex justify-center items-center`}>
                {getIcon(icon)}
            </div>
            <div className="flex flex-col w-[60%] gap-3">
                <h1 className="text-gray-100 font-bold text-lg">{title}</h1>
                <span className="text-gray-300">{description}</span>
                <button className="text-sm text-gray-200 self-start">{button}</button>
            </div>
        </li>
    )
}



export default ContactListItem