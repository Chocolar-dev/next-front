import Head from "next/head";
import Link from "next/link";
import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Layout from "../../components/Layout";
import styles from "../../styles/components/Product.module.css"

export default function product({ category, product, subcategory, origin }) {
    let contactClick = function (evt) {
        let name = evt.target.dataset.infoName
        let input = document.querySelector('#message')
        input.value = `Hola, me gustaría consultar más información sobre el producto ${name}`
    }

    return (
        <React.Fragment>
            <Head>
                <meta name="title" content={product.metaTitle} />
                <meta name="description" content={product.metaDescription} />
                <meta name="url" content={product.metaUrl} />
                <meta name="image" content={product.metaImage} />
                <meta name="site-name" content={product.metaSiteName} />
                <meta name="content-type" content={product.metaContentType} />
                <meta name="language" content={product.metaLanguage} />
            </Head>
            <Layout subtitle="Producto" description="Producto seleccionado">
                <div className={styles['product-page']}>
                    <div className={styles.container}>
                        <Breadcrumbs category={category} product={product} />
                        <section className={styles.product}>
                            <div className={styles['product__type']}>
                                <h3>{subcategory.name}</h3>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 flex align-items-stretch">
                                    <img src={product.img_url_1} alt={product.name} />
                                </div>
                                <div className="offset-lg-1 col-lg-7">
                                    <h2 className={styles['product__name']}>{product.name}</h2>
                                    <p>{product.long_description}</p>
                                    <div className={styles['table']}>
                                        <div className={styles['table__row']}>
                                            <span>MARCA:</span>
                                            <span>{product.brand}</span>
                                        </div>
                                        <div className={styles['table__row']}>
                                            <span>MATERIA GRASA:</span>
                                            <span>{product.fat}</span>
                                        </div>
                                        <div className={styles['table__row']}>
                                            <span>ORIGEN:</span>
                                            <span>{origin.name}</span>
                                        </div>
                                        <div className={styles['table__row']}>
                                            <span>PRESENTACIÓN/ENVASE:</span>
                                            <span>{product.packaging.type}, {product.packaging.weight}</span>
                                        </div>
                                        <div className={styles['table__row']}>
                                            <span>DIMENSIONES:</span>
                                            <span>{product.packaging.depth} x {product.packaging.height} x {product.packaging.width}</span>
                                        </div>
                                        <div className={styles['table__row']}>
                                            <span>VIDA ÚTIL:</span>
                                            <span>{product.shelf_life}</span>
                                        </div>
                                    </div>
                                    <a className={styles['info-button']} onClick={contactClick} data-info-name={product.name} href="#contacto">SOLICITAR INFORMACIÓN</a>
                                </div>
                            </div>
                        </section>
                        <Link href="/"><a className={styles['goback']}>VOLVER</a></Link>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    )
}

export async function getServerSideProps({ params }) {
    let products = await (await fetch('http://localhost:8765/api/products')).json()
    let categories = await (await fetch('http://localhost:8765/api/categories')).json()
    let subcategories = await (await fetch('http://localhost:8765/api/sub-categories')).json()
    let origins = await (await fetch('http://localhost:8765/api/origins')).json()
    let product
    let category
    let subcategory
    let origin

    products.some(product2 => {
        if (product2.slug == params.productSlug) {
            product = product2
            return true
        }
    });

    categories.some(category2 => {
        if (category2.slug == params.categorySlug) {
            category = category2
            return true
        }
    });

    subcategories.some(subcategory2 => {
        if (subcategory2.id == product.sub_category_id) {
            subcategory = subcategory2
            return true
        }
    });

    origins.some(origin2 => {
        if (origin2.id == product.origin_id) {
            origin = origin2
            return true
        }
    })

    return {
        props: { product, category, subcategory, origin }
    }
}