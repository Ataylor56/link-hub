import Image from "next/image";
import wPhone from "../public/phone-white.png"
import wText from "../public/text-white.png"

export default function Contact() {
    return (
        <div className={"flex flex-row mx-auto"}>

            <a href={"tel://4023662478"} className={"text-center rounded-full p-2 hover:bg-blue-900"}>
                <Image src={wPhone} width={50} height={50}/>
                <p className={"text-white"}>Call</p>
            </a>

            <div className={"p-5"}/>

            <a href={"sms://4023662478"} className={"text-center rounded-full p-2 hover:bg-blue-900"}>
                <Image src={wText} width={50} height={50}/>
                <p className={"text-white"}>Text</p>
            </a>

        </div>
    )
}