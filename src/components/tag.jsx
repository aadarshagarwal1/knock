import styles from "./tag.module.css";
export default function tag(props) {
  return (
    <div className={styles.tag}>
      <p>{props.tag}</p>
    </div>
  );
}
