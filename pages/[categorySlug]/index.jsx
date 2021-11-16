import Layout from "../../components/Layout";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import CardProduct from "../../components/CardProduct/CardProduct";
import React from "react";
import Head from "next/head";
import PhoneButtons from "../../components/phoneButtons/PhoneButtons";

export default function index({ category, products, subCategoriesList, categories }) {
    let contactClick = function (evt) {
        let name = evt.target.dataset.infoName
        let input = document.querySelector('#message')
        input.value = `Hola, me gustaría consultar más información sobre la categoría ${name}`
    }
    return (
        <React.Fragment>
            <Head>
                <meta name="og:title" content={category.metaTitle != '' ? category.metaTitle : category.name} />
                <meta name="og:description" content={category.metaDescription != '' ? category.metaDescription : category.short_description.replace(/<\/?p>/g, '')} />
                <meta name="og:url" content={`${category.metaUrl}/${category.slug}`} />
                <meta name="og:image" content={category.metaImage} />
                <meta name="og:site_name" content={category.metaSiteName} />
                <meta name="content-type" content={category.metaContentType} />
                <meta name="language" content={category.metaLanguage} />
                <meta name="og:type" content="article" />
                <link rel="canonical" href={`${category.metaUrl}/${category.slug}`} />
            </Head>
            <Layout title={category.name} description={category.metaDescription != '' ? category.metaDescription : category.short_description.replace(/<\/?p>/g, '')} categories={categories}>
                <div className="category-page m-top">
                    <div className="banner" style={{ backgroundImage: `url(${category.img_url})` }}>
                        <h1>{category.name}</h1>
                        <div className="category-description" dangerouslySetInnerHTML={{ __html: category.short_description }}></div>
                        <a href="#contacto" onClick={contactClick} data-info-name={category.name} className="cta-button">SOLICITAR<br />INFORMACIÓN</a>
                    </div>
                    <Breadcrumbs category={category} />
                    <section className="product-category">
                        <div className="wrapper">
                            {products.map(product =>
                                <CardProduct key={product.id} product={product} subCategory={subCategoriesList[product.sub_category_id]} category={category} />
                            )}
                        </div>
                    </section>
                    <div className="category-description" dangerouslySetInnerHTML={{ __html: category.description }}></div>
                </div>
            </Layout>
            <PhoneButtons waMessageTopic={`la categoría ${category.name}`} />
        </React.Fragment>
    )
}

export async function getServerSideProps({ params }) {
    let categories = await (await fetch(`${process.env.apiUrl}/categories`)).json()
    let products = await (await fetch(`${process.env.apiUrl}/products`)).json()
    let subCategories = await (await fetch(`${process.env.apiUrl}/sub-categories`)).json()
    let category;
    let subCategoriesList = []

    categories.forEach(category2 => {
        if (category2.slug == params.categorySlug) {
            category = category2
        }
    })

    products = products.filter(product => product.category_id == category.id)

    subCategories.forEach(subCategory => {
        subCategoriesList[subCategory.id] = subCategory
    })

    return {
        props: { category, products, subCategoriesList, categories }
    }
}
