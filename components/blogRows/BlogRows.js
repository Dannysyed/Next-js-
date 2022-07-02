import React from "react";
import styles from "./blogRows.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import BookIcon from "@mui/icons-material/Book";
import FaceIcon from "@mui/icons-material/Face";
import Link from 'next/link'
function BlogRows({ sectionName, colorTheme, textColor, cards, href }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{sectionName}</h2>
      <div className={styles.blogsContainer}>
        {cards.map((item) => (
          <Card
            className={styles.blogCard}
            sx={{ maxWidth: 345, borderColor: colorTheme }}
            elevation="0"
          >
            <CardMedia
              component="img"
              height="200"
              image="https://ichef.bbci.co.uk/news/976/cpsprodpb/15E47/production/_124717698_gettyimages-1395200655.jpg"
              alt="green iguana"
            />
            <CardContent
              style={{ backgroundColor: colorTheme }}
              className={styles.cardContent}
            >
              <p className={styles.blogTitle} style={{ color: textColor }}>
                SpaceX president backs Elon Musk over sex misconduct claims: ‘I
                believe the allegations to be false’
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
                  label="Technology"
                />
                <span className={styles.blogViews} style={{ color: textColor }}>
                  1023 <FaceIcon className={styles.blogViewsIcon} />
                </span>
                <Link href={href}>goto</Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default BlogRows;
