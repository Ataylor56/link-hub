import Image from "next/image";
import phone from "../public/phone.png"
import text from "../public/text.png"

export default function Contact() {
    return (
        <div className={"flex flex-row mx-auto"}>

            <div className={"text-center bg-white rounded-full p-2"}>
                <Image src={phone} width={50} height={50}/>
                <p>Call</p>
            </div>

            <div className={"p-5"}/>

            <div className={"text-center bg-white rounded-full p-2"}>
                <Image src={text} width={50} height={50}/>
                <p>Text</p>
            </div>

        </div>
    )
}