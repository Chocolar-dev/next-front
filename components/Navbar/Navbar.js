export default function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" style={{ cursor: "pointer" }}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#quienes-somos">QUIENES SOMOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#productos">PRODUCTOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contacto">CONTACTO</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}