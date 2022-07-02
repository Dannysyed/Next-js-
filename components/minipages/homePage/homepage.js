import HeroSection from "../../heroSection/HeroSection";
import styles from "./homePage.module.css";
// import myImage from "../../Assets/heroPage/zenitsu.jpg";
import BlogRows from "../../blogRows/BlogRows";
import Example from "../../corousal/corousal";
import Corousal from "../../corousal/corousal";

let Homepage = () => {
  return (
    <div className={styles.home}>
      {/* <HeroSection imgSrc={myImage} /> */}
      <Corousal></Corousal>
      <BlogRows
        sectionName="Trending today"
        colorTheme="#ff0000"
        textColor="#ffffff"
        cards={[1, 2, 3]}
        href={'/section'}
      />
      <BlogRows
        sectionName="Explore new topics"
        colorTheme="#ffd700"
        textColor="#000000"
        cards={[1, 2, 3]}
        href={'/section'}

      />
      <BlogRows
        sectionName="Must read section"
        colorTheme="#00ff7f"
        textColor="#000000"
        cards={[1, 2, 3]}
        href={'/section'}
      />
    </div>
  );
};
export default Homepage;
