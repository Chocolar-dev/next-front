import Link from "next/link";
import Layout from "../../../components/Layout";

export default function index() {
    return (
        <Layout subtitle="Categoria" description="Productos de categorias seleccionada">
            <div>
                <h1>CACAO EN POLVO</h1>                
                <p>Es un subproducto de la semilla del cacao. Corresponde a los sólidos no grasos de la semilla que se separan por filtración y posteriormente se muelen obteniendo así un fino polvo. Hay dos grandes grupos de cacaos en polvo, naturales o solubles. Los cacaos llamados solubles son cacao tratados con temperatura y soluciones alcalinas que le modifican el sabor y color.
                Así es que la gama de colores que podemos encontrar es muy amplia.
                Se utiliza para la elaboración de chocolates, helados, galletitas, budines, magdalenas, obleas, etc.
                Aceite vegetal de origen láurico especial para reemplazar la manteca de cacao y elaborar productos moldeados tabletas, figuras huecas. No necesita templado y se obtiene un excelente brillo y crack en el producto final, característico del chocolate.
                </p>
            </div>
            <div>
                <Link href="/productos"><a>productos - </a></Link>
                <Link href="/productos/categorias"><a>categorias</a></Link>
            </div>
            <h1>Productos de categoria seleccionada</h1>
            <Link href="/productos/categorias/producto"><a>producto</a></Link>
            <section>
                <div>
                    <h3>ALCALINO LEVE</h3>
                    <div>Imagen</div>
                    <div>
                        <h2>CACAO EN POLVO</h2>
                        <h3>ALCALINO BARRI RL1</h3>
                        <p>BOLSA DE CACAO EN POLVO CONTENIDO NETO 25KG</p>
                        <h4>BARRY CALLEBAUT</h4>
                    </div>
                    <div>
                        <button>VER MÁS</button>
                        <button>SOLICITAR INFORMACIÓN</button>
                    </div>

                </div>
            </section>
        </Layout>
    )
}
