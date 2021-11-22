import profilePic from '../public/sdsu.JPG'
import Image from "next/image";
import React from "react";

class Header extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            saying: ""
        };
    }

    async componentDidMount() {
        try {
            const res = await fetch(`https://austintaylor.dev/api/randomSaying`)
            const data = await res.json()
            this.setState({
                saying: data.saying
            })
        }
        catch (e) {
            console.log(e)
        }
        }



    render () {
        return (
            <div className={"flex-col flex p-10"}>
                <code className={"bg-gray-50 p-2 max-w-sm mx-auto text-center"}>{this.state.saying ? this.state.saying : "What is ⬆️ 🐕"}</code>
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



