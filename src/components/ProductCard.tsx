import { Link } from 'react-router-dom';
import type { Product } from '../data/products';

export default function ProductCard({product} : {product: Product}) {
    
    const buttonStyle = "px-4 py-2 text-white rounded hover:bg-sky-800";
    return (
        <div
            className="rounded-b-lg overflow-hidden shadow-md transition-all">
            <img src={product.image} className="w-full h-50 object-cover" />
            <div className="p-6">
                <h3 className="text-xl mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-blue-400 mb-4">${product.price}</p>
                <div className="flex gap-2">
                    <Link
                        className={`${buttonStyle} bg-gray-700`}>
                        View Details</Link>
                    <button
                        className={`${buttonStyle} bg-sky-700`}>
                        Add to Cart</button>
                </div>
            </div>
        </div>
    )
}