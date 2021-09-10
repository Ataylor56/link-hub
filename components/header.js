import profilePic from '../public/sdsu.JPG'
import Image from "next/image";

export default function Header() {
    return (
        <div className={"flex-col flex p-10"}>
            <code className={"bg-gray-50 p-2 max-w-sm mx-auto text-center"}>What is kickin chicken?</code>
            <p className={"pt-3 pb-3 text-white font-bold mx-auto text-5xl text-center"}>Welcome to my link-hub!</p>
            <div className={"pt-10 pl-10 pr-10 max-w-sm mx-auto"}>
                <Image className={"grayscale overflow-hidden rounded-full shadow-md hover:grayscale-0"} src={profilePic}/>
            </div>
        </div>
    )
}
