import styles from "./blogPage.module.css";
// import penimage from "../../Assets/bg-callout.jpg";
// import penimage1 from "../../Assets/portfolio-3.jpg";
// import penimage2 from "../../Assets/portfolio-2.jpg";
let BlogPage = () => {
  return (
    <main>
      <div className={styles.head}>
        <img src={'/images/bg-callout.jpg'}></img>
      </div>
      <div className={styles.main_div}>
        <div className={styles.date}>
          <div className={styles.date1}>
            <span>June 10, 2019</span>
          </div>
          <h2>Read This To Change How You Mind</h2>
        </div>
        <div className={styles.blog}>
          <div className={styles.content}>
            <h3>1. Here goes the Content </h3>
            <p>
              This is the paragrahp for the content in the given below box{" "}
              <br />
              this was the data in the good form in the ver adasf asfas fasfda
              sfa sdf
            </p>
          </div>
          <div className={styles.content1}>
            <img src={'/images/portfolio-3.jpg'}></img>
          </div>
          <div className={styles.content}>
            <h3>2. Here goes the Content </h3>
            <p>
              This is the paragrahp for the content in the given below box{" "}
              <br />
              this was the data in the good form in the ver adasf asfas fasfda
              sfa sdf
            </p>
          </div>
          <div className={styles.content1}>
            <img src={'/images/portfolio-2.jpg'}></img>
          </div>
        </div>
      </div>
    </main>
  );
};
export default BlogPage;
