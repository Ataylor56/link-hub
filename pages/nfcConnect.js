import Head from 'next/head'
import Header from "../components/header";
import Contact from "../components/contact";
import LinkCards from "../components/link-cards";


export default function NfcConnect() {
    return (
        <div className="bg-gray-dark overflow-hidden overflow-y-scroll overscroll-none flex flex-col justify-items-start pb-16 pt-14">
            <Head>
                <title>Austin Taylor - Connect</title>
                <meta name="description" content="Simple NextJS Link-Hub" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <Contact/>
            <LinkCards/>
        </div>
    )
}