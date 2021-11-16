import React from 'react'
import Layout from '../components/Layout';
import CategoriesList from '../components/CategoriesList/CategoriesList';
import Head from "next/head";
import PhoneButtons from '../components/phoneButtons/PhoneButtons';

export default function Home({ categories }) {
  return (
    <React.Fragment>
      <Head>
        <meta name="og:title" content="" />
        <meta name="og:description" content="Chocolar SRL" />
        <meta name="og:url" content="https://chocolarsrl.com.ar" />
        <meta name="og:image" content="https://chocolarsrl.com.ar/imgs/logo/logo_black_bg.png" />
        <meta name="og:site_name" content="Chocolar - Distribuidora de Cacao" />
        <meta name="content-type" content="website" />
        <meta name="language" content="es" />
        <meta name="og:type" content="website" />
        <link rel="canonical" href="https://chocolarsrl.com.ar" />
      </Head>
      <Layout categories={categories}>

        <div id="home" className="m-top-100">
          <div id="logo_slider"><img src="/old_assets/img/webp/logo_slider.webp" alt="Chocolar SRL" /></div>
          <div id="wrapper">
            <div className="callbacks_container">
              <ul className="rslides" id="slider4">
                <li>
                  <img src="/old_assets/img/home/webp/1.webp" alt="Chocolar SRL" />
                </li>
                <li>
                  <img src="" alt="Chocolar SRL" />
                </li>
                <li>
                  <img src="" alt="Chocolar SRL" />
                </li>
                <li>
                  <img src="" alt="Chocolar SRL" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>

        <section id="quienes-somos" className="m-top-50">
          {/* <div className="container"> */}
          <div className="row no-margin">
            <div className="col-md-6 offset-md-1">
              <div style={{ marginBottom: "-14px", color: "#531815", fontSize: "30px", fontFamily: "Barlow-MediumItalic" }}>
                <img src="/old_assets/img/webp/logo_quienes_somos.webp" alt="a" id="logo_quienes_somos" />
                <img src="/old_assets/img/webp/logo_iso.webp" alt="a" id="logo_quienes_somos" />
                QUIENES SOMOS
              </div>
              <p>
                Somos un equipo de profesionales con más de 15 años de experiencia en la importación, comercialización y
                distribución de productos derivados del cacao (cacao en polvo, manteca de cacao, licor de cacao), de calidad
                Súper Premium. <br />
                Liderados por <span data-toggle="tooltip"
                  title="Trabajó como asesora en Águila Saint, Arcor, Bonafide, Jorgito, Fantoche y La Nirva"
                  style={{ cursor: "pointer" }}>María José Burs*</span>, ayudamos a nuestros clientes a seleccionar la materia prima
                más adecuada, procesarla eficientemente y resolver problemas técnicos y de formulaciones.<br />
                Nos caracteriza nuestro servicio integral de calidad garantizada en todo el proceso (Normas de Calidad ISO
                9001). Contamos con varios centros de abastecimiento, y una logística eficaz que nos permite cumplir en tiempo y
                forma con la distribución y la entrega de la materia prima. <br />
                Abastecemos a grandes clientes productores de los mejores chocolates y helados del mercado
                argentino.<br /><br />
              </p>
            </div>
            <div className="col-md-4 offset-md-1 no-padding">
              <img src="/old_assets/img/webp/quienes-somos.webp" className="img-responsive" />
            </div>
          </div>
          {/* </div> */}
          <br />


          {/* <section id="marcas"> */}
          <div className="container">
            <div className="row">
              <h2 className="center uppercase bold">Las marcas que nos eligen</h2><br /><br />

              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-3 text-center">
                    <img src="/old_assets/img/marcas/1.jpg" alt="fel fort" className="img-responsive" style={{ maxWidth: "250px" }} />
                  </div>
                  <div className="col-md-3 text-center">
                    <img src="/old_assets/img/marcas/2.jpg" alt="ghelco" className="img-responsive" style={{ maxWidth: "250px" }} />
                  </div>
                  <div className="col-md-3 text-center">
                    <img src="/old_assets/img/marcas/3.jpg" alt="georgalos" className="img-responsive" style={{ maxWidth: "250px" }} />
                  </div>
                  <div className="col-md-3 text-center">
                    <img src="/old_assets/img/marcas/4.jpg" alt="arrufat" className="img-responsive" style={{ maxWidth: "250px" }} />
                  </div>
                </div>
              </div>

              <div className="col-9 box-center">
                <div className="row">
                  <div className="col-md-4 text-center">
                    <img src="/old_assets/img/marcas/5.jpg" alt="ledevit" className="img-responsive" style={{ maxWidth: "250px" }} />
                  </div>
                  <div className="col-md-4 text-center">
                    <img src="/old_assets/img/marcas/6.jpg" alt="palmesano" className="img-responsive" style={{ maxWidth: "250px" }} />
                  </div>
                  <div className="col-md-4 text-center">
                    <img src="/old_assets/img/marcas/7.jpg" alt="grido helado" className="img-responsive" style={{ maxWidth: "250px" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  </section> */}
        </section>

        <section id="productos">

          <div id="logo_slider"><img src="/old_assets/img/webp/logo_slider.webp" alt="" /></div>
          <img src="/old_assets/img/webp/productos.webp" className="img-responsive" style={{ maxWidth: "100% !important" }} alt="Chocolar SRL" />

          <CategoriesList categories={categories}></CategoriesList>
        </section>
      </Layout>
      <PhoneButtons />
    </React.Fragment>
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