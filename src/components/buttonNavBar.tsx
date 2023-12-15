'use client'
import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai"
import { IoCloseSharp } from "react-icons/io5";


const ButtonNavBar = () => {
    const [icon, setIcon] = useState<boolean>(true)

    const switchState = () => {
        setIcon(!icon)
    }

    return (
        <button className="md:hidden" onClick={switchState}>
            {icon ?
                <>
                    <AiOutlineBars className="text-3xl font-bold md:hidden w-full h-full" />
                </>
                :
                <>
                    <IoCloseSharp className="w-full h-full text-3xl" />
                    <ul className="absolute w-28 h-40 right-[0%] animate-in slide-in-from-top-12 ease-out duration-300 rounded-md w-[25%] -bottom-[220%] flex flex-col justify-between bg-gray-500 z-22" >
                        <li className="bg-gray-500 py-3">Sobre mim</li>
                        <li className="bg-gray-500 py-3">Projetos</li>
                        <li className="bg-gray-500 py-3 rounded-md">Contato</li>
                    </ul>
                </>
            }
        </button>
    )
}

export default ButtonNavBar