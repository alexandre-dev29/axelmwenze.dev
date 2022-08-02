import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface SkillsProps {}

export function Skills(props: SkillsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Skills!</h1>
    </div>
  );
}

export default Skills;
