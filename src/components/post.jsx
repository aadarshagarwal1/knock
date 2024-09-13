import { useContext } from "react";
import bin from "../assets/bin.svg";
import styles from "./post.module.css";
import Tag from "./tag";
import { DataContext } from "../store/dataContext";
export default function post(props) {
  const deleteItem = useContext(DataContext).postsAlterFunctions.deleteItem;
  return (
    <div className={styles.post}>
      <img
        src={bin}
        alt=""
        className={styles.binIcon}
        onClick={() => deleteItem(props.id)}
      />
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.comments}>{props.comments}</p>
      <p className={styles.tags}>
        {props.hashtags.map((x) => {
          return <Tag tag={x} key={x} />;
        })}
      </p>
      <div className={styles.reaction}>
        <p>
          There are {props.reactionCount ? props.reactionCount : `no`} reactions
          on this post.
        </p>
      </div>
    </div>
  );
}
