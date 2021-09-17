import Layout from "../../components/Layout";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import CardProduct from "../../components/CardProduct/CardProduct";

export default function index({ category, products, subCategoriesList, categories }) {
    return (
        <Layout subtitle="Categoria" description="Productos de categorias seleccionada" categories={categories}>
            <div className="category-page m-top">
                <div className="banner" style={{ backgroundImage: `url(${category.img_url})` }}>
                    <h1>{category.name}</h1>
                    <div dangerouslySetInnerHTML={{ __html: category.description }}></div>
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
