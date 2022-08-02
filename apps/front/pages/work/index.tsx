import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface WorkProps {}

export function Work(props: WorkProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Work!</h1>
    </div>
  );
}

export default Work;
