import Link from 'next/link';
import styles from '../../styles/components/Navbar.module.css';


export default function Navbar() {

    

    return (
        <header id="header" className={styles.header}>
            {/* <div className={styles.toggle}></div> */}
            <div id="navbar" className={styles.navbar}>
                <ul className={styles.ul}>
                    <li className="barlow-semibold"><Link href="/"><a className={styles.a}>HOME</a></Link></li>
                    <li className="barlow-semibold"><Link href="/quienes-somos"><a  className={styles.a}>QUIENES SOMOS</a></Link></li>
                    <li className="barlow-semibold">
                        <Link href="/productos"><a className={styles.a}>PRODUCTOS</a></Link>
                        <div>
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                    </li>
                    <li className="barlow-semibold"><Link href="/contacto"><a className={styles.a}>CONTACTO</a></Link></li>
                </ul>
            </div>
        </header>
    )
}