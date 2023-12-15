import Image from "next/image";
import NavBar from "./navBar";
import ProfilePicture from '@/assets/img/profile_pic.png';


const Header = () => {

    return (
        <header className="px-6 py-4 md:px-10 lg:px-36 fixed top-0 left-0 right-0 flex justify-between items-center bg-gray-500 border-b border-primary-100 z-20">
            <div className="flex items-center gap-6 text-gray-200">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center">
                    <Image className="rounded-full object-cover" width={100} height={100} src={ProfilePicture} alt="Profile image" />
                </div>
                <q>Oi, eu sou o <span className="font-semibold">Eric</span></q>
            </div>

            <NavBar />
        </header>
    )
}


export default Header