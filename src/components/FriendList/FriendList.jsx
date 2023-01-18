import propTypes from 'prop-types';
import clsx from 'clsx';
import css from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friendsArray }) => {
  return (
    <ul className={clsx(css['friend-list'])}>
      {friendsArray.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friendsArray: propTypes.arrayOf(propTypes.object).isRequired,
};

export default FriendList;
