import styles from './Footer.module.css'
import { useEffect } from 'react'

export default function Footer() {

    useEffect(() => {
        document.getElementById('contact-form-url').value = window.location.href
    }, [])

    return (
        <footer className={`${styles.footer} section section-primary white-transparent3`} id="contacto">
            <div className="container">
                <div className="row">
                    <div className={`col-md-12 ${styles["footer-text"]}`}>
                        <img className={styles['footer-logo']} src="/old_assets/img/webp/logo_footer.webp" />
                        <h4>CONTACTO</h4>
                        <p>
                            En <span className="bold">Chocolar S.R.L</span> estamos a disposición por cualquier consulta.<br />
                            Por favor, dejá tus inquietudes en el formulario y te responderemos a la brevedad.
                        </p>
                        <h5 className="bold">
                            ¡Muchas gracias!
                        </h5>
                    </div>
                </div>

                <form action={`${process.env.backendHost}/send-contact`} method="GET" id="contact-form">
                    <input type="hidden" name="url" id="contact-form-url" />
                    <div className="row">
                        <input type="text" name="name" placeholder="Nombre Completo*" required />
                    </div>
                    <div className="row">
                        <input type="email" name="email" placeholder="Correo Electrónico*" required />
                    </div>
                    <div className="row">
                        <input type="text" name="phone" placeholder="Teléfono*" />
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 col-md-8" style={{ lineHeight: '0' }}>
                            <textarea style={{ lineHeight: '1' }} name="message" id="message" cols="30" rows="10"
                                placeholder="Mensaje*" required ></textarea>
                        </div>
                        <div className="col-12 col-md-4 pt-5 pb-5 pt-md-0 pb-md-0 d-flex flex-column justify-content-end align-items-stretch pl-5 pr-5 pb-0">
                            <div className="d-flex align-items-md-center flex-column">
                                <div className="row">
                                    <div className="col-6 col-md-12">
                                        <input type="radio" name="contact-type" value="provider" id="provider" />
                                        <label htmlFor="provider">
                                            <div className={styles["radio-box"]}></div><span>PROVEEDOR</span>
                                        </label>
                                    </div>
                                    <div className="col-6 col-md-12">
                                        <input type="radio" name="contact-type" value="client" id="client" />
                                        <label htmlFor="client">
                                            <div className={styles["radio-box"]}></div><span>CLIENTE</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="row justify-content-center align-self-stretch">
                                    <button type="submit">ENVIAR</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div id="resultado" style={{ color: "#ffffff", fontSize: "17px", marginTop: "10px" }}></div>

                <div className={styles.extra} style={{
                    display: "flex",
                    paddingBottom: "60px",
                    flexWrap: "wrap",
                    maxWidth: "1140px",
                    margin: "auto",
                }}>
                    <div>
                        <div style={{ fontSize: "18px", textAlign: "left", minWidth: "250px", }}>
                            <font style={{ fontWeight: "600", fontStyle: "italic", }}>Comunicate con nosotros</font><br />
                            <font style={{ fontWeight: "600" }}>Oficina:</font>  48119667 <br />
                            <font style={{ fontWeight: "600" }}>Celular:</font>  1550104148 <br />
                            <font style={{ fontWeight: "600" }}>Compras menores a 500kg:</font>  (011) 5010-4148 <br />
                            <font style={{ fontWeight: "600" }}>Compras mayores a 500kg:</font>  (011) 5005-8912
                        </div>
                    </div>
                    <div style={{ minWidth: "250px" }}>
                        <img src="https://chocolarsrl.com.ar/old_assets/img/webp/logo_iso.webp" alt="" id="logo_quienes_somos" />
                    </div>
                </div>
                <br /><br />
            </div>
        </footer>
    )
}