import Head from 'next/head'
import Header from "../components/header";
import LinkCards from "../components/link-cards";
import Link from "next/link";

export default function Connect() {
    return (
        <div className="bg-gray-dark w-screen h-screen overflow-hidden overflow-y-scroll overscroll-none flex flex-col justify-items-start pb-16 pt-14">
            <Head>
                <title>Austin Taylor - Connect</title>
                <meta name="description" content="Connect with me!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={'absolute z-50 left-4 rounded-full px-2 py-1 bg-blue-light bg-opacity-20 hover:ring-4 hover:ring-opacity-20 hover:ring-offset-gray-dark'}>
                <Link href='/'>
                    <a className={'text-blue-light font-semibold md:text-3xl lg:text-3xl sm:text-2xl'}> &larr;</a>
                </Link>
            </div>
            <Header/>
            <LinkCards/>
        </div>
    )
}