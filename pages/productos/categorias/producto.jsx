import Link from "next/link";
import Layout from "../../../components/Layout";
import Image from 'next/image';

export default function producto() {
    return (
        <Layout subtitle="Producto" description="Producto seleccionado">
            <div>
                <Link href="/productos"><a>productos - </a></Link>
                <Link href="/productos/categorias"><a>categorias - </a></Link>
                <Link href="/productos/categorias/producto"><a>producto</a></Link>
            </div>
            <h1>Producto seleccionado</h1>
            <img src='\old_assets\panel\productos\08_30939drn.jpg' alt="" />
        </Layout>
    )
}
