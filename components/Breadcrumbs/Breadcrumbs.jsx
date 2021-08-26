import Link from 'next/link'
import styles from './Breadcrumbs.module.css'

export default function Breadcrumbs({ category, product }) {
    return (
        <div className={styles.breadcrumbs}>
            <span><Link href="/"><a>Categorías de productos</a></Link></span>
            {category &&
                <span><Link href={`/${category.slug}`}><a>{category.name}</a></Link></span>
            }
            {product &&
                <span><Link href={`/${category.slug}/${product.slug}`}><a>{product.name}</a></Link></span>
            }
        </div>
    )
}