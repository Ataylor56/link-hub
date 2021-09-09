import profilePic from '../public/sdsu.JPG'
import Image from "next/image";

export default function Header() {
    return (
        <div className={"flex-col flex p-10"}>
            <code className={"bg-gray-50 p-2 max-w-sm mx-auto"}>What is kickin chicken?</code>
            <p className={"p-3 text-white font-bold mx-auto text-5xl"}>Welcome to my link-hub!</p>
            <div className={"p-10 max-w-sm mx-auto"}>
                <Image className={"grayscale overflow-hidden rounded-full shadow-md hover:grayscale-0"} src={profilePic}/>
            </div>
        </div>
    )
}
