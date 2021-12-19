import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function LinkCards() {
    const info = {
        content: [
        {
            media: 'Twitter',
            icon: faTwitter,
            link: 'https://twitter.com/fatandtan56',
        },
        {
            media : 'Instagram',
            icon: faInstagram,
            link: 'https://instagram.com/austinjtaylor56',
        },
        {
            media: 'LinkedIn',
            icon: faLinkedin,
            link: 'https://linkedin.com/in/austintaylor1356',
        },
    ]
    }

    const linkCards = info.content.map( media => {
        return (
        <div key={media.media} className="pt-5 space-y-2.5 overscroll-none">
            <a href={media.link} className={"flex flex-row bg-blue-light text-gray-dark max-w-screen-sm mx-auto p-2 rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:bg-blue-dark hover:text-blue-light"} >
                <div className={"flex flex-col"}>
                    <FontAwesomeIcon icon={media.icon} size='3x' />
                </div>
                <div className={"flex flex-col justify-center mx-auto text-xl font-semibold"}>
                    <h2>{media.media}</h2>
                </div>
                <div className={"flex flex-col justify-center pr-6"}>
                    <h2 className={'text-xl font-semibold'}>&rarr;</h2>
                </div>
            </a>
        </div>
        )
    });

    return (
        <div>
            {linkCards}
        </div>
    )
}