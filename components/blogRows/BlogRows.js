import React from "react";
import styles from "./blogRows.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import BookIcon from "@mui/icons-material/Book";
import FaceIcon from "@mui/icons-material/Face";
import Link from 'next/link'
function BlogRows({ sectionName, colorTheme, textColor, cards, href, url }) {
  console.log(url, 'asdfas}}}}}}', cards)
  let filter = cards.filter(val => val.Post?.category == url)
  console.log(filter)
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{sectionName}</h2>
      <div className={styles.blogsContainer}>
        {filter?.map((item) => (
          <Card
            className={styles.blogCard}
            sx={{ maxWidth: 345, borderColor: colorTheme }}
            elevation="0"
          >
            {/* <CardMedia
              component="img"
              height="200"
              image="https://ichef.bbci.co.uk/news/976/cpsprodpb/15E47/production/_124717698_gettyimages-1395200655.jpg"
              alt="green iguana"
            /> */}
            <iframe src="https://giphy.com/embed/kN79e1NI1QErC" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            <CardContent
              style={{ backgroundColor: colorTheme }}
              className={styles.cardContent}
            >
              <p className={styles.blogTitle} style={{ color: textColor }}>
                {item?.Post?.title}
              </p>
              <div className={styles.blogDetail}>
                <Chip
                  className={styles.category}
                  style={{ color: textColor }}
                  icon={
                    <BookIcon
                      className={styles.categoryIcon}
                      style={{ color: textColor }}
                    />
                  }
                  label={item?.Post?.category}
                />
                <span className={styles.blogViews} style={{ color: textColor }}>
                  1023 <FaceIcon className={styles.blogViewsIcon} />
                </span>
                <Link href={`${href}/${item?.Post?.id}`} >goto</Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default BlogRows;
