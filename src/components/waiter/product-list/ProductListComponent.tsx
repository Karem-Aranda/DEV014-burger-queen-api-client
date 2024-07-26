import { Product } from "../../../services/ApiService";
import { ProductComponent } from "../product/ProductComponent";
import "./ProductListStyles.scss";

interface ProductListComponent {
  products: Product[];
  onAddProducts: (productId: number, numberOfProducts: number) => void;
}

export default function ProductListComponent({
  products,
  onAddProducts,
}: ProductListComponent) {
  return (
    <ul className="product-list">
      {products.map((product) => {
        return (
          <ProductComponent
            key={product.id}
            product={product}
            onAddProducts={onAddProducts}
          />
        );
      })}
    </ul>
  );
}
