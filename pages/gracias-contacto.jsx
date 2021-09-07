import styles from '../components/Footer/Footer.module.css'
import Link from 'next/link'

export default function thanksContact() {
    return (
        <footer style={{ height: "100vh" }} className={`${styles.footer} section section-primary white-transparent3`} id="contacto">
            <div className="container">
                <div className="row">
                    <div className={`col-md-12 ${styles["footer-text"]}`}>
                        <img className={styles['footer-logo']} src="/old_assets/img/logo_footer.png" />
                        <h1>GRACIAS POR CONTACTARTE CON NOSOTROS</h1>
                        <p>
                            En <span className="bold">breve</span> recibirás una respuesta
                        </p>
                        <h5 className="bold">
                            ¡Muchas gracias! <br /><br /><br /><br /><br /><br />
                            <Link href="/"><a style={{ color: "white", fontSize: "2rem" }}>Volver al sitio</a></Link>
                        </h5>
                    </div>
                </div>
            </div>
        </footer>
    )
}