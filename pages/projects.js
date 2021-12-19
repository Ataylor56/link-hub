import Head from 'next/head'
import {DiamondSunset} from "../public/svgs";
import NavBar from "../components/nav_bar";

export default function Projects() {
    return (
        <div className={"bg-gray-700"}>
            <Head>
                <title>Austin Taylor</title>
                <meta name="description" content="Austin Taylor" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar/>

            <DiamondSunset className={"absolute w-screen h-screen overscroll-none overscroll-y-none"}/>

            <div className={'relative w-full h-full flex flex-col pl-3 pr-3 text-center'}>
                <h1 className={"mt-20 text-gray-dark text-4xl font-semibold"}>
                    Well this is awkward..
                </h1>
                <h2 className={'mt-10 text-xl font-semibold'}>
                    My Projects page is currently under construction as well 🔨
                </h2>
            </div>

        </div>

    )
}
