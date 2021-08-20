import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const nameCompany = 'Chocolar SRL';

export default function Layout({ children, title, subtitle, description }) {
    return (
        <div>
            <Head>
                {subtitle ? (<title>{title} - {subtitle}</title>):(<title>{title}</title>)}
                <meta name="description" content={ description } />
                <link rel="icon" href="/old_assets/img/logo_footer.png" />
            </Head>
            <Navbar></Navbar>

            <main>{ children }</main>

            <Footer></Footer>
        </div>
    )
}

Layout.defaultProps = {
    title: "Chocolar SRL",
    description: "Descripción"
}
