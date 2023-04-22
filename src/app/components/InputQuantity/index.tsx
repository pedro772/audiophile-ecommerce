import styles from "./styles.module.scss";

interface InputQuantityProps {
  quantity: number;
  handleSubtract: () => void;
  handleAdd: () => void;
  isUsedOnCart?: boolean;
}

export function InputQuantity({
  quantity,
  handleSubtract,
  handleAdd,
  isUsedOnCart,
}: InputQuantityProps) {
  return (
    <div
      className={isUsedOnCart ? styles["container--cart"] : styles.container}
    >
      <button onClick={handleSubtract}>-</button>
      <span>{quantity}</span>
      <button onClick={handleAdd}>+</button>
    </div>
  );
}
