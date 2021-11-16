import Link from 'next/link';

export default function Header({ categories }) {
    let toggleMenu = function (evt) {
        let navbarContainer = document.querySelector('.navbar-container')
        if (navbarContainer.classList.contains('open')) {
            navbarContainer.classList.remove('open')
        } else {
            navbarContainer.classList.add('open')
        }
    }
    return (
        <header className="header">
            <div className="navbar-open">
                <button onClick={toggleMenu}><img src="/imgs/icons/menu.png" alt="" /></button>
            </div>
            <div className="header__brand">
                <img src="/imgs/logo/logo_header.png" alt="" />
            </div>
            <div className="navbar-container">
                <div className="navbar-brand">
                    <img src="/imgs/logo/logo_navbar.png" alt="" />
                </div>
                <div className="navbar-close">
                    <button onClick={toggleMenu}><img src="/imgs/icons/menu-close.png" alt="" /></button>
                </div>
                <nav className="navbar">
                    <ul>
                        <li>
                            <Link href="/"><a onClick={toggleMenu}>HOME</a></Link>
                        </li>
                        <li>
                            <Link href="/#quienes-somos"><a onClick={toggleMenu}>QUIENES SOMOS</a></Link>
                        </li>
                        <li className="navbar-products">
                            <Link href="/#lista-de-categorias"><a onClick={toggleMenu}>PRODUCTOS<img src="/imgs/icons/arrow-down.png" alt="" /></a></Link>
                            <div className="navbar-products__dropdown">
                                <ul>
                                    <li><Link href="/#lista-de-categorias"><a>PRODUCTOS<img src="/imgs/icons/arrow-down.png" alt="" /></a></Link></li>
                                    {categories.map((category) => {
                                        return <li key={category.id}><Link href={`/${category.slug}`}><a>{category.name}</a></Link></li>
                                    })}
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link href="#contacto"><a onClick={toggleMenu}>CONTACTO</a></Link>
                        </li>
                    </ul>
                </nav>
                <div className="navbar-img">
                    <img src="/imgs/webp/navbar-image.webp" alt="" />
                </div>
            </div>
        </header>
    )
}