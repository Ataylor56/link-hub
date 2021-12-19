import Head from 'next/head'
import {DiamondSunset, EndlessConstellation} from "../public/svgs";
import NavBar from "../components/nav_bar";

export default function Home() {
  return (
    <div className={"bg-gray-700"}>
      <Head>
        <title>Austin Taylor</title>
        <meta name="description" content="Austin Taylor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <NavBar/>

        <DiamondSunset className={"absolute w-screen h-screen overscroll-none overscroll-y-none"}/>

        <div className={'relative w-full h-full flex flex-col items-center'}>
            <div className={'mt-20 border-8 pl-52 pr-52 pt-32 pb-32'}>
                <h1 className={"text-gray-dark text-4xl font-semibold text-center text-black"}>
                    Welcome to my &apos;website&apos;
                </h1>
                <h2 className={'mt-10 text-xl font-semibold text-center'}>
                    Excuse my mess - this is currently under construction 🔨
                </h2>
            </div>
        </div>

    </div>

  )
}
