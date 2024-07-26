import { Product } from "../../../services/ApiService";
import { OrderItemComponent } from "../order-item/OrderItemComponent";
import "./OrderListStyles.scss";

interface OrderListComponentProps {
  orders: any;
  products: Product[];
  onIncrease: (productId: number) => void;
  onDecrease: (productId: number) => void;
}

const formatProductsToMap = (products: Product[]) => {
  let mapOfProducts: any = {};

  products.forEach((product) => {
    if (!mapOfProducts[product.id]) {
      mapOfProducts[product.id] = product;
    }
  });

  return mapOfProducts;
};

export function OrderListComponent(props: OrderListComponentProps) {
  const { orders, products, onIncrease, onDecrease } = props;
  const formattedProducts = formatProductsToMap(products);

  return (
    <div className="order-card-container">
      <div className="table-header">
        <span className="table-header-text">Nombre</span>
        <span className="table-header-text">Cantidad</span>
        <span className="table-header-text">total</span>
      </div>
      <div>
        <ul>
          {Object.entries(orders).map((orderEntry: any) => {
            const [id, quantity] = orderEntry;
            const product = formattedProducts[id];

            return (
              <OrderItemComponent
                key={orderEntry[id]}
                name={product.name}
                total={product.price * quantity}
                numberOfProducts={quantity}
                onIncrease={() => onIncrease(id)}
                onDecrease={() => onDecrease(id)}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

// container blanco
// HEADER
// div - Nombre Cantidad y total
// span Nombre
// span Cantidad
// span Total
//
// LISTA
// DIV PRODUCTO
// DIV PRODUCTO
// DIV PRODUCTO
//
// CHECKOUT
// DIV TOTAL ETC
// DIV CONTROLES, LIMPIAR UNICAMENTE ES EL UNICO HASTA AHORA
// BUTTON Limpiar
//
//
//
