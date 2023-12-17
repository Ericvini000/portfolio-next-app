'use client'
import { TRepository } from '@/schemas/repository.schema';
import { createContext, ReactNode, useState } from 'react';

interface IWebsite {
    name: string;
    language: string | null;
    app_url: string | null | undefined;
}

interface IPortfolioContext {
    modalState: boolean;
    setModalState: React.Dispatch<React.SetStateAction<boolean>>;
    showAndHiddenModal: (text: string) => void;
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
    webSites: IWebsite[];
    setWebSites: React.Dispatch<React.SetStateAction<IWebsite[]>>
    loadProjects: (projectElement: TRepository) => TRepository;
}

const PortfolioContext = createContext<IPortfolioContext>({} as IPortfolioContext)

const PortfolioProvider = ({ children }: { children: ReactNode }) => {
    const [modalState, setModalState] = useState(false)
    const [text, setText] = useState("Email copiado")
    const [webSites, setWebSites] = useState<IWebsite[]>([
        {
            name: "kenzie-burguer-createdInKenzie",
            language: "Typescript",
            app_url: "https://vercel.com/hamburgueria-website-project/kenzie-burguer-v2-template-ericvini"
        },
        {
            name: "git_search_user_info--createdInKenzie",
            language: "Javascript",
            app_url: "https://ericvini000.github.io/git_search_user_info--createdInKenzie/"
        },
        {
            name: "kenzie-burguer-createdInKenzie",
            language: "Javascript",
            app_url: "https://ericvini000.github.io/projeto_e_commerce--createdInKenzie/"
        },
    ])


    const loadProjects = (projectElement: TRepository) => {
        const foundProject = webSites.find(e => e.name === projectElement.name)
        const newProject: TRepository = { ...projectElement, app_url: foundProject?.app_url }
        return newProject
    }
    const showAndHiddenModal = (text: string) => {
        setText(text)
        setModalState(true)

        setTimeout(() => setModalState(false), 1000)
    }

    return (
        <PortfolioContext.Provider value={{ modalState, setModalState, showAndHiddenModal, text, setText, webSites, setWebSites, loadProjects }}>
            {children}
        </PortfolioContext.Provider>
    )
}

export { PortfolioContext, PortfolioProvider }