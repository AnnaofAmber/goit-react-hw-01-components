import clsx from 'clsx';
import css from './FriendListItem.module.css';

export const FriendListItem = props => {
  const { avatar, name, isOnline } = props;

  return (
    <li className={css.item}>
      <span
        className={clsx(
          css.status,
          isOnline ? [css.isOnline] : [css.notOnline]
        )}
      >
        {isOnline}
      </span>
      <img className={css.image} src={avatar} alt="User avatar" width={48} />
      <p className={css.name}>{name}</p>
    </li>
  );
};
