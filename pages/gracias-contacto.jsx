import styles from '../components/Footer/Footer.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function thanksContact({ categories }) {
    return (
        <Layout categories={categories}>
            <div className="container" style={{ textAlign: 'center', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="row">
                    <div className={`col-md-12 ${styles["footer-text"]}`}>
                        <h1 style={{ fontFamily: 'Barlow-MediumItalic', color: '#531815' }}>Gracias por su consulta</h1>
                        <p style={{ fontSize: '19px' }}>
                            en unos minutos nos pondremos en contacto
                        </p>
                        <h5 className="bold">
                            <br /><br /><br /><br /><br /><br />
                            <Link href="/"><a style={{ color: "black", fontSize: "2rem" }}>Volver al sitio</a></Link>
                        </h5>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export async function getServerSideProps() {
    let data = await fetch(`${process.env.apiUrl}/categories`)
    return {
        props: {
            categories: await data.json()
        }
    }
}