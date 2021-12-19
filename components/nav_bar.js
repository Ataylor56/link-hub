import Link from 'next/link'
import { useState } from 'react'
import { Transition} from "@headlessui/react";

export default function NavBar(props){
    const [active, setActive] = useState(false)

    return (
            <div className={'sticky top-0 z-50'}>
                <nav className="bg-gray-dark">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <Link href={'/'}>
                                        <a className='text-lg text-gray-light hover:text-blue-dark font-semibold tracking-wider'>@AT</a>
                                    </Link>
                                </div>
                                <div className="hidden md:block text-blue-light">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        <Link href='/about'>
                                            <a className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-dark" >
                                                About
                                            </a>
                                        </Link>
                                        <Link href='/projects'>
                                            <a className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-dark" >
                                                Projects
                                            </a>
                                        </Link>
                                        <Link href='/connect'>
                                            <a className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-dark" >
                                                Connect
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <button
                                    onClick={() => setActive(!active)}
                                    type="button"
                                    className="bg-blue-light inline-flex items-center justify-center p-2 rounded-md text-gray-dark hover:ring-4 hover:ring-opacity-50 hover:ring-offset-gray-dark"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false" >
                                    <span className="sr-only">Open main menu</span>
                                    {!active ? (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true" >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true" >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <Transition
                        show={active}
                        enter="transition ease-out duration-100 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-75 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        {(ref) => (
                            <div className="md:hidden" id="mobile-menu">
                                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-blue-light">
                                    <Link href={'/about'} >
                                        <a className="hover:text-blue-dark block px-3 py-2 rounded-md text-base font-medium" >
                                            About
                                        </a>
                                    </Link>
                                    <Link href={'/projects'}>
                                        <a className="hover:text-blue-dark block px-3 py-2 rounded-md text-base font-medium" >
                                            Projects
                                        </a>
                                    </Link>
                                    <Link href={'/connect'}>
                                        <a className="hover:text-blue-dark block px-3 py-2 rounded-md text-base font-medium" >
                                            Connect
                                        </a>
                                    </Link>

                                </div>
                            </div>
                        )}
                    </Transition>
                </nav>
            </div>
    )
}
