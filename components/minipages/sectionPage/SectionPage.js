import React from "react";
import styles from "./sectionPage.module.css";
import BlogRows from "../../blogRows/BlogRows";
import imgSrc from '../../../public/port.jpg'
import Link from 'next/link'
function SectionPage({ title, subtitle, data, url }) {
  console.log(data, 'ss')

  return (
    <main>
      <div className={styles.header}>
        <img src={`/images/${url}.jpg`} alt="section here" />
      </div>
      <div className={styles.headerText}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <BlogRows
        sectionName="All glamour here"
        colorTheme="#ffd3b6"
        textColor="#000000"
        cards={data.users}
        href={'/blog'}
        url={url}

      />
      {/* <Link href={"/blog"}>Productivity</Link> */}
    </main>
  );
}

export default SectionPage;
