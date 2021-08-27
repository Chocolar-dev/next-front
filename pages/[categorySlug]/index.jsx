import Layout from "../../components/Layout";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import CardProduct from "../../components/CardProduct/CardProduct";

export default function index({ category, products, subCategoriesList }) {
    return (
        <Layout subtitle="Categoria" description="Productos de categorias seleccionada">
            <div className="category-page m-top">
                <div className="banner" style={{ backgroundImage: `url(${category.img_url})` }}>
                    <h1>{category.name}</h1>
                    <p>{category.description}</p>
                </div>
                <Breadcrumbs category={category} />
                <section className="product-category">
                    <div className="wrapper">
                        {products.map(product =>
                            <CardProduct key={product.id} product={product} subCategory={subCategoriesList[product.sub_category_id]} category={category} />
                        )}
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({ params }) {
    let categories = await (await fetch("http://localhost:8765/api/categories")).json()
    let products = await (await fetch("http://localhost:8765/api/products")).json()
    let subCategories = await (await fetch("http://localhost:8765/api/sub-categories")).json()
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
        props: { category, products, subCategoriesList }
    }
}
