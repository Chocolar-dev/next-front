import Head from 'next/head';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const nameCompany = 'Chocolar SRL';

export default function Layout({ children, title, subtitle, description, categories }) {
    return (
        <div>
            <Head>
                {subtitle ? (<title>{title} - {subtitle}</title>) : (<title>{title}</title>)}
                <meta name="description" content={description} />
                <link rel="icon" href="/old_assets/img/logo_footer.png" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" integrity="sha384-tKLJeE1ALTUwtXlaGjJYM3sejfssWdAaWR2s97axw4xkiAdMzQjtOjgcyw0Y50KU" crossOrigin="anonymous"></link>
            </Head>
            <Header categories={categories}></Header>

            <main className="m-top">{children}</main>

            <Footer></Footer>
        </div>
    )
}

Layout.defaultProps = {
    title: "Chocolar SRL",
    description: "Descripción"
}
