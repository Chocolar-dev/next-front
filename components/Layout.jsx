import Head from 'next/head';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function Layout({ children, title, description, categories }) {
    return (
        <div>
            <Head>
                <title>{title} ● Distribuidora de Cacao</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/old_assets/img/logo_footer.png" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" integrity="sha384-tKLJeE1ALTUwtXlaGjJYM3sejfssWdAaWR2s97axw4xkiAdMzQjtOjgcyw0Y50KU" crossOrigin="anonymous"></link>
                <script dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-M2PXQ69');`}}></script>
                <meta name="google-site-verification" content="qNpeil5AOzkGkq9f_deWD7iF52inYHyEKUKA-9papCU" />
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
