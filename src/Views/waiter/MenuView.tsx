import { useEffect, useState } from "react";
import ProductListComponent from "../../components/waiter/product-list/ProductListComponent";
import { Product, getProducts } from "../../services/ApiService";
import { OrderListComponent } from "../../components/waiter/order-list/OrderListComponent";
import "./MenuStyles.scss";

export function MenuView() {
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<any>({});
  const [error, setError] = useState("");
  const [selectedType, setSelectedType] = useState<string>("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const productList = await getProducts();

      if (productList) {
        setProducts(productList);
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleTypeClick = (type: string) => {
    setSelectedType(type);
  };

  const filterByType = selectedType
    ? products.filter(
        (product) => product.type.toLowerCase() === selectedType.toLowerCase()
      )
    : products;

  const handleAddProduct = (productId: number, numberOfProducts: number) => {
    let updatedOrders = { ...orders }; // Se copia el objeto

    if (updatedOrders[productId]) {
      updatedOrders[productId] = updatedOrders[productId] + numberOfProducts;
    } else {
      updatedOrders[productId] = numberOfProducts;
    }

    setOrders(updatedOrders);
  };

  const handleIncreaseOrder = (productId: number) => {
    let updatedOrders = { ...orders }; // Se copia el objeto

    updatedOrders[productId] = updatedOrders[productId] + 1;

    setOrders(updatedOrders);
  };

  const handleDecreaseOrder = (productId: number) => {
    let updatedOrders = { ...orders }; // Se copia el objeto

    if (updatedOrders[productId] > 1) {
      updatedOrders[productId] = updatedOrders[productId] - 1;
    }

    setOrders(updatedOrders);
  };

  return (
    <div className="menu-view">
      <div className="menu-view-left">
        <div>
          <button onClick={() => handleTypeClick("breakfast")}>
            DESAYUNOS
          </button>
          <button onClick={() => handleTypeClick("lunch")}>COMIDA</button>
          <button onClick={() => handleTypeClick("beverages")}>BEBIDAS</button>
        </div>
        <div>
          <ProductListComponent
            products={filterByType}
            onAddProducts={handleAddProduct}
          />
        </div>
      </div>
      <div className="menu-view-right">
        <OrderListComponent
          orders={orders}
          products={products}
          onIncrease={handleIncreaseOrder}
          onDecrease={handleDecreaseOrder}
        />
      </div>
    </div>
  );
}
