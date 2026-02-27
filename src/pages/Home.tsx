import ProductCard from '../components/ProductCard';
import { getProducts } from '../data/products';

export default function Home() {
    const products = getProducts();
    const containerStyle = "max-w-7xl mx-auto mb-8";
    return (
        <div className="flex-1 p-8">
            <div className="text-center py-16 px-8 max-w-200 mx-auto">
                <h1 className="text-5xl text-gray-800 mb-4 font-bold">Welcome to ShopHub</h1>
                <p className="text-lg text-gray-600 mb-8">Your one-stop shop for all your needs!</p>
            </div>

            <div className={containerStyle}>
                <h2 className="text-4xl text-gray-800 mb-8 font-bold">Our Products</h2>
                <div className="grid sm:grid-cols-3 gap-8 mb-8">
                    {products.map((product) => (
                        <ProductCard product={product}/>
                    ))}
                </div>
            </div>
        </div>
    )
}