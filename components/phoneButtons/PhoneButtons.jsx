import css from './PhoneButtons.module.css'
import Image from 'next/image'

export default function PhoneButtons({ waMessageTopic }) {
    return (
        <div className={css['phone-buttons']}>
            <a href={`https://wa.me/5491150104148?text=Hola.%20Quería%20consultar%20sobre%20${waMessageTopic}`} target="_blank" rel="noreferrer" className={css["phone-button"]}>
                <Image src="/imgs/icons/whatsapp.png" width="70px" height="70px" alt="" />
            </a>
            <a href="tel:48119667" className={css["phone-button"]}>
                <Image src="/imgs/icons/phone.png" width="70px" height="70px" alt="" />
            </a>
        </div>
    )
}

PhoneButtons.defaultProps = {
    waMessageTopic: ''
}