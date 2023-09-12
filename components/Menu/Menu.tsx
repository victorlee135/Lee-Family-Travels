import classnames from 'classnames';
import styles from './style.module.css';

export interface MenuProps {
    isOpen: boolean;
    setOpen: (boolean) => void;
  }

export default function Menu({ isOpen, setOpen }: MenuProps) {
  return (
    <label
      className={classnames(styles.menu, { [styles.open]: isOpen })}
      title="Menu"
      onClick={() => setOpen((open) => !open)}
    >
      {[1, 2, 3].map((key) => (
        <div
          key={key}
          className={classnames(styles.line, { [styles.open_line]: isOpen })}
        ></div>
      ))}
    </label>
  );
}