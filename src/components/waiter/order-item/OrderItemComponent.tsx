import { QuantityComponent } from "../quantity-component/QuantityComponent";
import "./OrderItemStyles.scss";

interface OrderItemComponentProps {
  numberOfProducts: number;
  name: string;
  total: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function OrderItemComponent(props: OrderItemComponentProps) {
  const { numberOfProducts, name, total, onIncrease, onDecrease } = props;

  return (
    <li>
      <div>
        <span>{name}</span>
        <QuantityComponent
          numberOfProducts={numberOfProducts}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
        <span>${total}</span>
      </div>
    </li>
  );
}
