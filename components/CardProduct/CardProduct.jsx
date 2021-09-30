export default function CardProduct({ product, category, subCategory }) {
    let contactClick = function (evt) {
        let name = evt.target.dataset.infoName
        let input = document.querySelector('#message')
        input.value = `Hola, me gustaría consultar más información sobre el producto ${name}`
    }

    return (
        <div className="card-product">
            <div className="card-desk">
                <h3>{subCategory.name}</h3>
                <div className="img-product">
                    <a href={`/${category.slug}/${product.slug}`}><img src={product.img_url} alt="" /></a>
                </div>
                <div className="detail">
                    <a href={`/${category.slug}/${product.slug}`}>
                        <h2>{product.name}</h2>
                    </a>
                    <p>{product.short_description}</p>
                    <h5>{product.brand}</h5>
                </div>
                <div className="btns">
                    <a className="btn1" href={`/${category.slug}/${product.slug}`}>VER MÁS</a>
                    <a href="#contacto" onClick={contactClick} data-info-name={product.name} className="btn2">SOLICITAR INFORMACIÓN</a>
                </div>
            </div>
            <div className="card-mobile">
                <div className="img-product">
                    <a href={`/${category.slug}/${product.slug}`}><img src={product.img_url} alt="" /></a>
                </div>
                <div className="type">
                    <h3>{subCategory.name}</h3>
                </div>
                <div className="wrapper-detail">
                    <div className="detail">
                        <a href={`/${category.slug}/${product.slug}`}>
                            <h2>{product.name}</h2>
                        </a>
                        <p>{product.short_description}</p>
                        <h5>{product.brand}</h5>
                    </div>
                    <div className="btns">
                        <a className="btn1" href={`/${category.slug}/${product.slug}`}>VER MÁS</a>
                        <a href="#contacto" onClick={contactClick} data-info-name={product.name} className="btn2">SOLICITAR INFORMACIÓN</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
