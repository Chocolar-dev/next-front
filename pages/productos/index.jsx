import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';


export default function index() {
    return (
        <Layout subtitle="Productos" description="Todos los productos disponibles">
            <div>
                <Link href="/productos"><a>productos</a></Link>
            </div>
            <h1>Lista de productos</h1>
            <div>
                <Link href="/productos/categorias"><a>categorias</a></Link>
                <Image src="/old_assets/img/home/1.jpg" alt="" width={400} height={300}></Image>
            </div>
        </Layout>
    )
}
