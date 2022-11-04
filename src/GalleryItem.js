import styles from "./GalleryItem.module.css";
import autumnImg from "./assets/autumn2.jpeg";
// import a specific icon component of the react-feather package
import { Heart } from "react-feather";
export default function GalleryItem({ itemData }) {
  return (
    <div className={styles.GalleryItemContainer}>
      <img src={itemData.src} />
      {/* <img src={autumnImg} /> */}
      {/* <img src="/assets/autumn.jpeg" /> */}
      <h3>{itemData.title}</h3>
      <p>{itemData.info}</p>
      {/* <Heart size="20" color="rgb(250,0,0)" /> */}
    </div>
  );
}
