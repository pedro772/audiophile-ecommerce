import styles from "./styles.module.scss";

interface CategoryHeaderProps {
  title: string;
}

export function CategoryHeader({ title }: CategoryHeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>{title}</h1>
    </header>
  );
}
