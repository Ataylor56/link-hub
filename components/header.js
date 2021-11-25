import profilePic from '../public/sdsu.JPG'
import Image from "next/image";
import Loading from "./loading";

function Header(){
    const saying = getSaying()
    return(
        <div className={"flex-col flex p-10"}>
            <code className={"bg-gray-50 p-2 max-w-sm mx-auto text-center"}>{saying ? saying : Loading() }</code>
            <p className={"pt-3 pb-3 text-white font-bold mx-auto text-5xl text-center"}>Welcome to my link-hub!</p>
            <div className={"pt-10 pl-10 pr-10 max-w-sm mx-auto"}>
                <Image alt={"Me coaching At South Dakota State"} className={"grayscale overflow-hidden rounded-full shadow-md hover:grayscale-0"}
                       src={profilePic}/>
            </div>
        </div>
    )
}


function getSaying(){

    const num = Math.floor(Math.random() * 10)
    let saying = ""
    switch (num) {
        case 0: {
            saying = "What is Sup Doc? 🥕"
        }
            break;
        case 1: {
            saying = "Carne a-suh dood? 🥩"
        }
            break;
        case 2: {
            saying = "What is kickin my Chicken? 🐔"
        }
            break;
        case 3: {
            saying = "Sup 😏"
        }
            break;
        case 4: {
            saying = "What it do buckaroo? 🤠"
        }
            break;
        case 5: {
            saying = "What is ⬆️ 🐕"
        }
            break;
        case 6: {
            saying = "What's poppin 🍾"
        }
            break;
        case 7: {
            saying = "Salutations brotherin 👽"
        }
            break;
        case 8: {
            saying = "Hey, hi, how ya durrin? - Weezy F Baby"
        }
            break;
        case 9: {
            saying = "Greetings Mortal 🤖"
        }
            break;
        default: {
            saying = "What is Sup Doc? 🥕"
        }
            break;
    }
    return saying
}

export default Header;



