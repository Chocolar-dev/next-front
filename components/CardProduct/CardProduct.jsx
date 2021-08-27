export default function CardProduct({ product, category, subCategory }) {
    return (
        <div className="card-product">
            <h3>{subCategory.name}</h3>
            <div className="img-product">
                <img src={product.img_url} alt="" />
            </div>
            <div className="detail">
                <h2>{product.name}</h2>
                <p>{product.short_description}</p>
                <h5>{product.brand}</h5>
            </div>
            <div className="btns">
                <a className="btn1" href={`/${category.slug}/${product.slug}`}>VER MÁS</a>
                <button className="btn2">SOLICITAR INFORMACIÓN</button>
            </div>
        </div>
    )
}
