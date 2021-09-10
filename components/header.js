import profilePic from '../public/sdsu.JPG'
import Image from "next/image";
import React from "react";

class Header extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            saying: "What is Sup Doc?🥕"
        };
        this.getRandomSaying = this.getRandomSaying.bind(this);
    }

    componentDidMount() {
        this.getRandomSaying();
    }


    getRandomSaying() {
        const num = Math.floor(Math.random()*10);
        console.log(num);
        let saying = ""
        switch (num) {
            case 0: {saying = "Greetings Friend 🤓"} break;
            case 1: {saying = "Carne a-suh dood? 🥩"} break;
            case 2: {saying = "What is kickin my Chicken? 🐔"} break;
            case 3: {saying = "Sup 😏"} break;
            case 4: {saying = "What it do buckaroo? 🤠"} break;
            case 5: {saying = "What is ⬆️ 🐕"} break;
            case 6: {saying = "What's poppin 🍾"} break;
            case 7: {saying = "Salutations brotherin 👽"} break;
            case 8: {saying = "Hey, hi, how ya durrin? - Weezy F Baby"} break;
            case 9: {saying = "Greetings Mortal 🤖"} break;
            default: {saying = "What is Sup Doc? 🥕"} break;
        }
        this.setState({saying: saying});
    }
    render () {
        const saying = this.state.saying;
        return (
            <div className={"flex-col flex p-10"}>
                <code className={"bg-gray-50 p-2 max-w-sm mx-auto text-center"}>{saying}</code>
                <p className={"pt-3 pb-3 text-white font-bold mx-auto text-5xl text-center"}>Welcome to my link-hub!</p>
                <div className={"pt-10 pl-10 pr-10 max-w-sm mx-auto"}>
                    <Image className={"grayscale overflow-hidden rounded-full shadow-md hover:grayscale-0"}
                           src={profilePic}/>
                </div>
            </div>
        )
    }
}
export default Header;



