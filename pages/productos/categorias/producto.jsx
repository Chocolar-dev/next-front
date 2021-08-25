import Link from "next/link";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import Layout from "../../../components/Layout";
import styles from "../../../styles/components/Product.module.css"

export default function producto() {
    return (
        <Layout subtitle="Producto" description="Producto seleccionado">
            <div className={styles['product-page']}>
                <div className={styles['hero']} style={{ backgroundImage: "url(/imgs/granos-y-polvo-de-cacao_edit.jpg)" }}>
                    <h1>CACAO EN POLVO</h1>
                </div>
                <div className={styles.container}>
                    <Breadcrumbs category="categoría1" product="product" />
                    <section className={styles.product}>
                        <div className={styles['product__type']}>
                            <h3>ALCALINO LEVE</h3>
                        </div>
                        <div className="row">
                            <div className="col-4 flex align-items-stretch">
                                <img src='/imgs/licor-de-cacao.jpg' alt="" />
                            </div>
                            <div className="offset-1 col-7">
                                <h2 className={styles['product__name']}>Cacao en polvo alcalino RL1</h2>
                                <p>Es un polvo soluble de flujo libre proveniente de la torta de cacao alcalina pulverizada obtenido por proceso del prensado de la pasta de cacao alcalina. El producto es elaborado a partir de semillas de cacao. Se utiliza para repostería, baño de repostería, elaboración de chocolate, galletitas, budines, pan dulces y leches chocolatadas.</p>
                                <div className={styles['table']}>
                                    <div className={styles['table__row']}>
                                        <span>MARCA:</span>
                                        <span>Barry Callebaut</span>
                                    </div>
                                    <div className={styles['table__row']}>
                                        <span>CARACTERÍSTICAS:</span>
                                        <span>Semi elaborado de cacao</span>
                                    </div>
                                    <div className={styles['table__row']}>
                                        <span>MATERIA GRASA:</span>
                                        <span>10-12%</span>
                                    </div>
                                    <div className={styles['table__row']}>
                                        <span>ORIGEN DEL GRANO DE CACAO:</span>
                                        <span>Costa de Marfil</span>
                                    </div>
                                    <div className={styles['table__row']}>
                                        <span>PRESENTACIÓN/ENVASE:</span>
                                        <span>Bolsa papel Kraft 25kg.</span>
                                    </div>
                                    <div className={styles['table__row']}>
                                        <span>DIMENSIONES:</span>
                                        <span>40 x 64 x 20 cm</span>
                                    </div>
                                    <div className={styles['table__row']}>
                                        <span>VIDA ÚTIL:</span>
                                        <span>24 meses</span>
                                    </div>
                                </div>
                                <button>SOLICITAR INFORMACIÓN</button>
                            </div>
                        </div>
                    </section>
                    <Link href="/"><a className={styles['goback']}>VOLVER</a></Link>
                </div>
            </div>
        </Layout>
    )
}
