import Head from 'next/head'
import Header from "../components/header";
import LinkCards from "../components/link-cards";


export default function Connect() {
    return (
        <div className="bg-gray-dark w-screen h-screen overflow-hidden overflow-y-scroll overscroll-none flex flex-col justify-items-start pb-16 pt-14">
            <Head>
                <title>Austin Taylor - Connect</title>
                <meta name="description" content="Connect with me!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <LinkCards/>
        </div>
    )
}