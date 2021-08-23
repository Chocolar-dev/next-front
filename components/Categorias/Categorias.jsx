import Link from 'next/link';
import styles from '../../styles/components/Categorias.module.css';

export default function Categorias() {
    return (
        <section className={styles.catSection}>
            <div className={styles.titleDiv}>
                <h2 className="barlow-medium"><strong className="barlow-extrabold">CATEGORÍAS</strong> DE PRODUCTOS</h2>
            </div>
            <div className={styles.navDiv}>
                <ul className="poppins-bold">
                    <li>
                        
                            <img src="../old_assets/img/home/1.jpg" alt="" />
                            <h3>CACAO EN POLVO</h3>
                        
                    </li>
                    <li>
                        
                            <img src="../old_assets/img/home/1.jpg" alt="" />
                            <h3>LICOR/PASTA DE CACAO</h3>
                        
                    </li>
                    <li>
                        
                            <img src="../old_assets/img/home/1.jpg" alt="" />
                            <h3>MANTECA DE CACAO</h3>
                        
                    </li>
                    <li>
                    
                            <img src="../old_assets/img/home/1.jpg" alt="" />
                            <h3>NIBS/GRANOS DE CACAO</h3>
                        
                    </li>
                    <li>
                        
                            <img src="../old_assets/img/home/1.jpg" alt="" />
                            <h3>ACEITE DE PALMA</h3>
                        
                    </li>
                </ul>
            </div>
        </section>
    )
}
