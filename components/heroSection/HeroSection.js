import React from "react";
import styles from "./heroSection.module.css";

function HeroSection({ imgSrc }) {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className={`d-block w-100 ${styles.mainImg}`}
              src={imgSrc}
              alt="First slide"
            />

            <div className="carousel-caption d-md-block">
              <h1 className={styles.mainHeading}>
                {"Demon Slayer Season 3 is here"}
              </h1>
              <p className={styles.subHeading}>
                {
                  "When Demon Slayer season 3 comes out, based on everything we know"
                }
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className={`d-block w-100 ${styles.mainImg}`}
              src={
                "https://9to5mac.com/wp-content/uploads/sites/6/2019/03/Apple-event.jpg?quality=82&strip=all"
              }
              alt="Second slide"
            />
            <div className="carousel-caption d-md-block">
              <h1 className={styles.mainHeading}>{"Apple event 2022"}</h1>
              <p className={styles.subHeading}>
                {
                  "latest mac release, find what apple brings in their upcoming event 2022"
                }
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className={`d-block w-100 ${styles.mainImg}`}
              src={"https://images4.alphacoders.com/108/thumb-1920-1080699.jpg"}
              alt="Third slide"
            />
            <div className="carousel-caption d-md-block">
              <h1 className={styles.mainHeading}>{"Thor: Love and Thunder"}</h1>
              <p className={styles.subHeading}>
                {
                  "Thor Wields Stormbreaker In First Love & Thunder Movie Poster"
                }
              </p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
