'use client'
import { createContext, ReactNode, useState } from 'react';

interface IWebsite {
    name: string;
    language: string;
    app: string;

}

interface IPortfolioContext {
    modalState: boolean;
    setModalState: React.Dispatch<React.SetStateAction<boolean>>;
    showAndHiddenModal: (text: string) => void;
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
    webSites: IWebsite[];
    setWebSites: React.Dispatch<React.SetStateAction<IWebsite[]>>

}

const PortfolioContext = createContext<IPortfolioContext>({} as IPortfolioContext)

const PortfolioProvider = ({ children }: { children: ReactNode }) => {
    const [modalState, setModalState] = useState(false)
    const [text, setText] = useState("Email copiado")
    const [webSites, setWebSites] = useState([
        {
            name: "kenzie-burguer-createdInKenzie",
            language: "Typescript",
            app: "https://vercel.com/hamburgueria-website-project/kenzie-burguer-v2-template-ericvini"
        },
        {
            name: "git_search_user_info--createdInKenzie",
            language: "Javascript",
            app: "https://ericvini000.github.io/git_search_user_info--createdInKenzie/"
        },
        {
            name: "kenzie-burguer-createdInKenzie",
            language: "Javascript",
            app: "https://ericvini000.github.io/projeto_e_commerce--createdInKenzie/"
        },
    ])

    const showAndHiddenModal = (text: string) => {
        setText(text)
        setModalState(true)

        setTimeout(() => setModalState(false), 1000)
    }

    return (
        <PortfolioContext.Provider value={{ modalState, setModalState, showAndHiddenModal, text, setText, webSites, setWebSites }}>
            {children}
        </PortfolioContext.Provider>
    )
}

export { PortfolioContext, PortfolioProvider }