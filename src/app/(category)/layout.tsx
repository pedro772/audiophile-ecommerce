import { AboutUs } from "../components/AboutUs";
import { Categories } from "../components/Categories";
import { Navbar } from "../components/Navbar";

import styles from "./styles.module.scss";

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        {children}
        <Categories />
        <AboutUs />
      </main>
    </>
  );
}
