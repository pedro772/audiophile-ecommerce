import { Categories } from "../../Categories";

import styles from "./styles.module.scss";

export function CategoriesModal() {
  return (
    <div className={styles["categories--modal"]}>
      <Categories />
    </div>
  );
}
