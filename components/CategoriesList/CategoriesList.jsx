export default function categoriesList({ categories }) {
    return (
        <div id="lista-de-categorias" className="categories-selector">
            <h4><b>CATEGORÍAS</b> DE PRODUCTOS</h4>
            <div className="categories-selector__list mt-5">
                {categories.map((category) =>
                    <div key={category.id} className="categories-selector__item category-item">
                        <a href={`/${category.slug}`}>
                            <div className="category-item__img-container">
                                <img src="../old_assets/img/home/1.jpg" alt="" />
                            </div>
                            <div className="category-item__name">{category.name}</div>
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}