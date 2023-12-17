'use client'
import useContact from "@/hooks/usePortfolio";

const CopiedModal = () => {
    const { modalState, text } = useContact()

    const verifyState = (state: boolean): string => {
        if (state) {
            return "animate-in fade-in duration-300"
        } else {
            return `block animate-out fade-out duration-300 hidden`
        }
    }

    return (
        <dialog className={`text-gray-100 bg-gray-300 py-2 px-4 rounded-full 
        fixed bottom-8 duration-500 block ${verifyState(modalState)}`}>
            {text}
        </dialog>
    )
}


export default CopiedModal