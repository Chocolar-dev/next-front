import Link from 'next/link';
// import styles from '../../styles/components/Navbar.module.css';


export default function Navbar() {
    return (
        <header className="navbar-container">
            <nav className="navbar-desk">
                <ul>
                    <li>
                        <Link href="/"><a>HOME</a></Link>
                    </li>
                    <li>
                        <Link href="/#quienes-somos"><a>QUIENES SOMOS</a></Link>
                    </li>
                    <li className="nav-productos">
                        <Link href="#lista-de-categorias"><a>PRODUCTOS</a></Link>
                    </li>
                    <li>
                        <Link href="#contacto"><a>CONTACTO</a></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}