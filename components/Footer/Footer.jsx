import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={`${styles.footer} section section-primary white-transparent3`} id="contacto">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 footer-text">
                        <img className="footer-logo" src="/old_assets/img/logo_footer.png" />
                        <h1>CONTACTO</h1>
                        <p>
                            En <span className="bold">Chocolar S.R.L</span> estamos a disposición por cualquier consulta.<br />
                            Por favor, dejá tus inquietudes en el formulario y te responderemos a la brevedad.
                        </p>
                        <h5 className="bold">
                            ¡Muchas gracias!
                        </h5>
                    </div>
                </div>

                <form action="">
                    <div className="row">
                        <input type="text" placeholder="Nombre*" />
                    </div>
                    <div className="row">
                        <input type="text" placeholder="Apellido*" />
                    </div>
                    <div className="row">
                        <input type="text" placeholder="Teléfono*" />
                    </div>
                    <div className="row mt-3">
                        <div className="col-8" style={{ lineHeight: '0' }}>
                            <textarea style={{ lineHeight: '1' }} name="message" id="message" cols="30" rows="10"
                                placeholder="Mensaje*"></textarea>
                        </div>
                        <div className="col-4 d-flex flex-column justify-content-end align-items-stretch pl-5 pr-5 pb-0">
                            <div className="d-flex align-items-center flex-column">
                                <div>
                                    <div className="row">
                                        <input type="radio" name="contact-type" value="provider" id="provider" />
                                        <label htmlFor="provider">
                                            <div className="radio-box"></div><span>PROVEEDOR</span>
                                        </label>
                                    </div>
                                    <div className="row">
                                        <input type="radio" name="contact-type" value="client" id="client" />
                                        <label htmlFor="client">
                                            <div className="radio-box"></div><span>CLIENTE</span>
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

                <br /><br />
            </div>
        </footer>
    )
}