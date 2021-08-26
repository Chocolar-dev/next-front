import Link from "next/link";
import Layout from "../../../components/Layout";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";

import CardProduct from "../../../components/CardProduct/CardProduct";

export default function index() {
    return (
        <Layout subtitle="Categoria" description="Productos de categorias seleccionada">
            <div className="category-page m-top">
                <div className="banner" style={{ backgroundImage: "url(/imgs/granos-y-polvo-de-cacao_edit.jpg)" }}>
                    <h1>CACAO EN POLVO</h1>                
                    <p>Es un subproducto de la semilla del cacao. Corresponde a los sólidos no grasos de la semilla que se separan por filtración y posteriormente se muelen obteniendo así un fino polvo. Hay dos grandes grupos de cacaos en polvo, naturales o solubles. Los cacaos llamados solubles son cacao tratados con temperatura y soluciones alcalinas que le modifican el sabor y color.</p>
                    <p>Así es que la gama de colores que podemos encontrar es muy amplia.</p>
                    <p>Se utiliza para la elaboración de chocolates, helados, galletitas, budines, magdalenas, obleas, etc.</p>
                    <p>Aceite vegetal de origen láurico especial para reemplazar la manteca de cacao y elaborar productos moldeados tabletas, figuras huecas. No necesita templado y se obtiene un excelente brillo y crack en el producto final, característico del chocolate.
                    </p>
                </div>
                <Breadcrumbs category="categoría1" product="" />
                <section className="product-category">
                    <div className="wrapper">
                        <CardProduct></CardProduct>
                        <CardProduct></CardProduct>
                        <CardProduct></CardProduct>
                        <CardProduct></CardProduct>
                        <CardProduct></CardProduct>
                        <CardProduct></CardProduct>

                    </div>
                </section>
            </div>
        </Layout>
    )
}
