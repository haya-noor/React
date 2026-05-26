import styles from './sidenoteStyle.module.css';

function Sidenote({ type, title, children }) {
  const className = `${styles.wrapper} ${styles[type]}`;

  /*
  <aside> is an HTML tag used for content that is related to the main content, but separate from it.
Think of it like a side note, warning box, tip box, notice box, or extra information box.
  */
  return (
    <aside className={className}>
      <h3 className={styles.title}>{title}</h3>
      <p>{children}</p>
    </aside>
  );
}

export default Sidenote;