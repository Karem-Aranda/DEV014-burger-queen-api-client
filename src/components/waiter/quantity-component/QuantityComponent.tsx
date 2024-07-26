import "./QuantityStyles.scss";

interface QuantityComponentInterface {
  numberOfProducts: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function QuantityComponent(props: QuantityComponentInterface) {
  const { numberOfProducts, onIncrease, onDecrease } = props;

  return (
    <div className="quantity-container">
      <button
        className="quantity-btn"
        onClick={onDecrease}
        disabled={numberOfProducts === 1}
      >
        -
      </button>
      <span className="quantity-counter">{numberOfProducts}</span>
      <button className="quantity-btn" onClick={onIncrease}>
        +
      </button>
    </div>
  );
}
