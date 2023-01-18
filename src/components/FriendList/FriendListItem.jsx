import propTypes from 'prop-types';
import clsx from 'clsx';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={clsx(css.item)}>
      <span
        className={clsx(css.status, isOnline ? css.online : css.offline)}
      ></span>
      <img
        className={clsx(css.avatar)}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={clsx(css.name)}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  isOnline: propTypes.bool.isRequired,
  name: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
};

export default FriendListItem;
