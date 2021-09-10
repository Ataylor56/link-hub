import Image from "next/image";
import twitter from "../public/twitter.png"
import instagram from "../public/instagram.png"
import linkedIn from "../public/linkedin.png"

export default function LinkCards() {
    return (
        <div className="pt-5 space-y-2.5 overscroll-none">

            <a href={"https://twitter.com/fatandtan56"} className={"flex flex-row bg-gray-100 max-w-screen-sm mx-auto p-2 rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:bg-blue-900 hover:text-white"}>

                    <div className={"flex flex-col"}>
                        <Image width={50} height={50} src={twitter}/>
                    </div>
                    <div className={"flex flex-col justify-center mx-auto"}>
                        <h2>Twitter</h2>
                    </div>
                    <div className={"flex flex-col justify-center pr-6"}>
                        <h2>&rarr;</h2>
                    </div>
            </a>
            <a href={"https://instagram.com/austinjtaylor56"} className={"flex flex-row bg-gray-100 max-w-screen-sm mx-auto p-2 rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:bg-blue-900 hover:text-white"}>
                <div className={"flex flex-col"}>
                    <Image width={50} height={50} src={instagram}/>
                </div>
                <div className={"flex flex-col justify-center mx-auto"}>
                    <h2>Instagram</h2>
                </div>
                <div className={"flex flex-col justify-center pr-6"}>
                    <h2>&rarr;</h2>
                </div>
            </a>
            <a href={"https://linkedin.com/in/austintaylor1356"} className={"flex flex-row bg-gray-100 max-w-screen-sm mx-auto p-2 rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:bg-blue-900 hover:text-white"}>
                <div className={"flex flex-col"}>
                    <Image width={50} height={50} src={linkedIn}/>
                </div>
                <div className={"flex flex-col justify-center mx-auto"}>
                    <h2>LinkedIn</h2>
                </div>
                <div className={"flex flex-col justify-center pr-6"}>
                    <h2>&rarr;</h2>
                </div>
            </a>

        </div>
    )
}