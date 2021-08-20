import Link from "next/link";
import Layout from "../../../components/Layout";

export default function index() {
    return (
        <Layout subtitle="Categoria" description="Productos de categorias seleccionada">
            <div>
                <Link href="/productos"><a>productos - </a></Link>
                <Link href="/productos/categorias"><a>categorias</a></Link>
            </div>
            <h1>Productos de categoria seleccionada</h1>
            <Link href="/productos/categorias/producto"><a>producto</a></Link>
        </Layout>
    )
}
