import {faPhone, faCommentDots} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css"

export default function Contact() {
    const info = {
        content: [
            {
                action: 'Call',
                icon: faPhone,
                link: 'tel://4023662478',
            },
            {
                action : 'Text',
                icon: faCommentDots,
                link: 'sms://4023662478',
            },
        ]
    }
    const contactCards =  info.content.map( media => {
        return (
            <div key={media.action} className={"text-center pl-5 pr-5 pt-2 pb-1 text-gray-dark bg-blue-light rounded-full hover:bg-blue-dark hover:text-blue-light"}>
                <a href={media.link} >
                    <FontAwesomeIcon icon={media.icon} size='3x' />
                    <p className={'text-xl font-semibold'}>{media.action}</p>
                </a>
            </div>
        )
    } );

    return (
        <div className={"flex flex-row justify-center p-1 gap-5"}>
            {contactCards}
        </div>
    )
}