import { useState } from "react";
import { Product } from "../../../services/ApiService";
import { QuantityComponent } from "../quantity-component/QuantityComponent";
import "./ProductStyles.scss";

interface ProductComponent {
  product: Product;
  onAddProducts: (productId: number, numberOfProducts: number) => void;
}

export function ProductComponent({ product, onAddProducts }: ProductComponent) {
  const [numberOfProducts, setNumberOfProducts] = useState(1);

  const onDecrease = () => {
    if (numberOfProducts > 1) {
      setNumberOfProducts((prev) => prev - 1);
    }
  };

  const onIncrease = () => {
    setNumberOfProducts((prev) => prev + 1);
  };

  const handleAdd = () => {
    onAddProducts(product.id, numberOfProducts);
  };

  return (
    <li className="product-item">
      <img className="product-item-img" src={product.image} />
      <div className="product-item-details">
        <div className="product-item-row">
          <span className="product-item-name">{product.name}</span>
          <span className="product-item-price">${product.price}</span>
        </div>
        <div className="product-item-row">
          <QuantityComponent
            numberOfProducts={numberOfProducts}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
          />
          <button className="btn-add" onClick={handleAdd}>
            Agregar
          </button>
        </div>
      </div>
    </li>
  );
}
