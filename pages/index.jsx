import React from 'react'
import Layout from '../components/Layout';
import CategoriesList from '../components/CategoriesList/CategoriesList';

export default function Home({ categories }) {
  return (
    <Layout categories={categories}>

      <div id="home" className="m-top-100">
        <div id="logo_slider"><img src="/old_assets/img/logo_slider.png" alt="" /></div>
        <div id="wrapper">
          <div className="callbacks_container">
            <ul className="rslides" id="slider4">
              <li>
                <img src="/old_assets/img/home/1.jpg" alt="" />
              </li>
              <li>
                <img src="/old_assets/img/home/2.jpg" alt="" />
              </li>
              <li>
                <img src="/old_assets/img/home/3.jpg" alt="" />
              </li>
              <li>
                <img src="/old_assets/img/home/4.jpg" alt="" />
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
              <img src="/old_assets/img/logo_quienes_somos.png" alt="a" id="logo_quienes_somos" />
              <img src="/old_assets/img/logo_iso.png" alt="a" id="logo_quienes_somos" />
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
            <img src="/old_assets/img/quienes-somos.jpg" className="img-responsive" />
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
                  <img src="/old_assets/img/marcas/1.jpg" className="img-responsive" style={{ maxWidth: "250px" }} />
                </div>
                <div className="col-md-3 text-center">
                  <img src="/old_assets/img/marcas/2.jpg" className="img-responsive" style={{ maxWidth: "250px" }} />
                </div>
                <div className="col-md-3 text-center">
                  <img src="/old_assets/img/marcas/3.jpg" className="img-responsive" style={{ maxWidth: "250px" }} />
                </div>
                <div className="col-md-3 text-center">
                  <img src="/old_assets/img/marcas/4.jpg" className="img-responsive" style={{ maxWidth: "250px" }} />
                </div>
              </div>
            </div>

            <div className="col-9 box-center">
              <div className="row">
                <div className="col-md-4 text-center">
                  <img src="/old_assets/img/marcas/5.jpg" className="img-responsive" style={{ maxWidth: "250px" }} />
                </div>
                <div className="col-md-4 text-center">
                  <img src="/old_assets/img/marcas/6.jpg" className="img-responsive" style={{ maxWidth: "250px" }} />
                </div>
                <div className="col-md-4 text-center">
                  <img src="/old_assets/img/marcas/7.jpg" className="img-responsive" style={{ maxWidth: "250px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  </section> */}
      </section>

      <section id="productos">

        <div id="logo_slider"><img src="/old_assets/img/logo_slider.png" alt="" /></div>
        <img src="/old_assets/img/productos.jpg" className="img-responsive" style={{ maxWidth: "100% !important" }} />

        <CategoriesList categories={categories}></CategoriesList>
      </section>
    </Layout>
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