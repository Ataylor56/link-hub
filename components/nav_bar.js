import Link from 'next/link'
import { useState } from 'react'


export default function NavBar(props){
    const [active, setActive] = useState(false)
    const handleClick = () => {
        setActive(!active)
        //console.log(`Active ${active}`)
    }
    return (
        <div className={''}>
            <nav className={"flex items-center w-screen bg-gray-dark p-4"}>
                <Link href={'/connect'}>
                    <a className={'inline-flex place-self-start items-center p-2 mr-4'}>
                        <span className={'hover:text-blue-dark text-blue-light font-bold uppercase tracking-wide'}>
                            @AT
                        </span>
                    </a>
                </Link>
            </nav>
        </div>
    )

    // <div className={'flex place-content-end w-screen fill-current text-gray-light'}>
    //      <button className={'text-blue-light hover:text-blue-dark'} onClick={handleClick} >
    //          <svg strokeLinecap={'round'}
    //               stroke={'currentColor'}
    //               viewBox='0 0 10 8'
    //               width='40'>
    //              <path d={'M1 1h8M1 4h 8M1 7h8'} />
    //          </svg>
    //      </button>
    //  </div>
}