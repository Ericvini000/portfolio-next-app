'use client'
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useCallback } from "react";
import useContact from "@/hooks/useContact";

interface Props {
    icon: string;
    bgColor: string;
    title: string;
    description: string;
    button: string;
    info: string;
}


const ContactListItem = ({ icon, bgColor, title, description, button, info }: Props) => {

    const { showAndHiddenModal } = useContact()

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "Numero":
                return <FaWhatsapp className="w-[75px] h-[75px]" />
            case "Email":
                return <MdEmail className="w-[75px] h-[75px]" />
        }
    }

    const copyToClipboard = useCallback(async (text: string) => {
        try {
            await navigator.clipboard.writeText(text)
        } catch (error) {
            console.log(error)
        }
    }, [])


    return (
        <li className="flex gap-8">
            <div className={`w-[80px] h-[80px] ${bgColor} rounded-md flex justify-center items-center`}>
                {getIcon(icon)}
            </div>
            <div className="flex flex-col w-[60%] gap-3">
                <h1 className="text-gray-100 font-bold text-lg">{title}</h1>
                <span className="text-gray-300">{description}</span>
                <button className="text-sm text-gray-200 self-start hover:text-gray-300" onClick={() => {
                    copyToClipboard(info)
                    showAndHiddenModal(icon + " copiado")
                }}>{button}</button>
            </div>
        </li>
    )
}



export default ContactListItem