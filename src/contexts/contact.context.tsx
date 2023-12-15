'use client'
import { createContext, ReactNode, useState } from 'react';

interface IContactContext {
    modalState: boolean;
    setModalState: React.Dispatch<React.SetStateAction<boolean>>;
    showAndHiddenModal: (text: string) => void;
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
}

const ContactContext = createContext<IContactContext>({} as IContactContext)

const ContactProvider = ({ children }: { children: ReactNode }) => {
    const [modalState, setModalState] = useState(false)
    const [text, setText] = useState("Email copiado")

    const showAndHiddenModal = (text: string) => {
        setText(text)
        setModalState(true)

        setTimeout(() => setModalState(false), 1000)
    }

    return (
        <ContactContext.Provider value={{ modalState, setModalState, showAndHiddenModal, text, setText }}>
            {children}
        </ContactContext.Provider>
    )
}

export { ContactContext, ContactProvider }