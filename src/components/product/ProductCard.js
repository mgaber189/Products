import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartslice";

function ProductCard({product}) {
  const dispatch = useDispatch();

  return (
    <div className="max-w-xs font-sans border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col  justify-between">
      <div>
        
        <img src={product?.images[0]} alt="product photo" />
      </div>
      <p className="text-gray-600 text-xs uppercase tracking-wider mb-1">
        {product?.category}
      </p>
      <h3 className="font-bold text-lg mb-1">{product?.name}</h3>
      <p className="text-gray-700 text-sm mb-2">{product?.description}</p>
      <p className="text-green-700 text-xs mb-3">{product?.stock > 0 ? `In Stock ${product.stock}` : 'Out of Stock'}</p>
      <div className="flex items-center mb-4">
        <span className="font-bold text-xl text-orange-500">{product?.price} $</span>
      </div>
      <button onClick={()=>{dispatch(addToCart(product))}} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition-colors">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
