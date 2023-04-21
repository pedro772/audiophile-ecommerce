import styles from "./styles.module.scss";

interface ProductHeaderProps {
  title: string;
}

export function ProductHeader({ title }: ProductHeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>{title}</h1>
    </header>
  );
}
