import styles from './Loader.module.css';
export function Loader({ bgColor }) {
  return (
    <div className={styles.root} style={{ backgroundColor: bgColor }}>
      <div className={styles.loader} />
    </div>
  );
}

Loader.defaultProps = {
  bgColor: 'transparent',
};
