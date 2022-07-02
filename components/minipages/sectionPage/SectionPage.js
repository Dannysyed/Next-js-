import React from "react";
import styles from "./sectionPage.module.css";
import BlogRows from "../../blogRows/BlogRows";
import imgSrc from '../../../public/port.jpg'
import Link from 'next/link'
function SectionPage({ title, subtitle }) {

  return (
    <main>
      <div className={styles.header}>
        <img src={'/images/dc.jpg'} alt="section here" />
      </div>
      <div className={styles.headerText}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <BlogRows
        sectionName="All glamour here"
        colorTheme="#ffd3b6"
        textColor="#000000"
        cards={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}

      />
      <Link href={"/blog"}>Productivity</Link>
    </main>
  );
}

export default SectionPage;
