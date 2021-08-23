import Link from "next/link";
import Layout from "../../../components/Layout";
import Image from 'next/image';

export default function producto() {
    return (
        <Layout subtitle="Producto" description="Producto seleccionado">
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
                <Link href="/productos/categorias"><a>categorias - </a></Link>
                <Link href="/productos/categorias/producto"><a>producto</a></Link>
            </div>
            <section>
                <div>
                    <div>
                    <h3>ALCALINO LEVE</h3>
                    </div>
                    <div>
                        <div>
                            imagen
                        </div>
                        <div>
                            <h2>Cacao en polvo alcalino RL1</h2>
                            <p>Es un polvo soluble de flujo libre proveniente de la torta de cacao alcalina pulverizada obtenido por proceso del prensado de la pasta de cacao alcalina. El producto es elaborado a partir de semillas de cacao. Se utiliza para repostería, baño de repostería, elaboración de chocolate, galletitas, budines, pan dulces y leches chocolatadas.</p>
                            <table>
                                <tr>
                                    <th>MARCA:</th>
                                </tr>
                                <tr>
                                    <td>Barry Callebaut</td>
                                    
                                </tr>
                                <tr>
                                    <th>CARACTERÍSTICAS:</th>
                                </tr>
                                <tr>
                                    <td>Semi elaborado de cacao</td>
                                </tr>
                                <tr>
                                    <th>MATERIA GRASA:</th>
                                </tr>
                                <tr>
                                    <td>10-12%</td>
                                </tr>
                                <tr>
                                    <th>ORIGEN DEL GRANO DE CACAO:</th>
                                </tr>
                                <tr>
                                    <td>Costa de Marfil</td>
                                </tr>
                            </table>
                            <table>
                                <tr>
                                    <th>PRESENTACIÓN/ENVASE:</th>
                                </tr>
                                <tr>
                                    <td>Bolsa papel Kraft 25kg.</td>
                                </tr>
                                <tr>
                                    <th>DIMENSIONES:</th>
                                </tr>
                                <tr>
                                    <td>40 x 64 x 20 cm</td>
                                </tr>
                                <tr>
                                    <th>VIDA ÚTIL:</th>
                                </tr>
                                <tr>
                                    <td>24 meses</td>
                                </tr>
                            </table>
                            <button>SOLOCITAR INFORMACIÓN</button>
                        </div>
                    </div>
                </div>
            </section>
            <img src='\old_assets\panel\productos\08_30939drn.jpg' alt="" />
        </Layout>
    )
}
