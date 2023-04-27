import styles from "./styles.module.scss";

interface RemoveAllButtonProps {
  handleClick?: (_?: any) => void;
}

export default function RemoveAllButton({ handleClick }: RemoveAllButtonProps) {
  return (
    <button className={styles.remove} onClick={handleClick && handleClick}>
      Remove All
    </button>
  );
}
