import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';


export default function index({ category, products }) {
    return (
        <Layout subtitle="Productos" description="Todos los productos disponibles">
            <div>
                <Link href="/productos"><a>productos</a></Link>
            </div>
            <h1>Lista de productos de: {category.name}</h1>
            <ul>
                {products.map(product =>
                    <li key={product.id}><a href={`${category.slug}/${product.slug}`}>{product.name}</a></li>
                )}
            </ul>
            <div>
                <Link href="/productos/categorias"><a>categorias</a></Link>
                <Image src="/old_assets/img/home/1.jpg" alt="" width={400} height={300}></Image>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({ params }) {
    let categories = await (await fetch("http://localhost:8765/api/categories")).json()
    let products = await (await fetch("http://localhost:8765/api/products")).json()
    let category;

    categories.forEach(category2 => {
        if (category2.slug == params.categorySlug) {
            category = category2
        }
    })

    products = products.filter(product => product.category_id == category.id)

    return {
        props: { category, products }
    }
}
