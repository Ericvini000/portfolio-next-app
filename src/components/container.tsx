import { ReactNode } from "react"

interface Props {
    children: ReactNode
}


const Container = ({ children }: Props) => {
    return (
        <div className="min-w-screen min-h-screen">
            {children}
        </div>
    )
}

export default Container