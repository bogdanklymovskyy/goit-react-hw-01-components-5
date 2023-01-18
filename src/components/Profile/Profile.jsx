import clsx from 'clsx';
import propTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({
  userName,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <div className={clsx(css.container)}>
      <div className={clsx(css.profile)}>
        <div className={clsx(css.description)}>
          <img src={avatar} alt="User avatar" className={clsx(css.avatar)} />
          <p className={clsx(css.name)}>{userName}</p>
          <p className={clsx(css.tag)}>@{tag}</p>
          <p className={clsx(css.location)}>{location}</p>
        </div>

        <ul className={clsx(css.stats)}>
          <li className={clsx(css.stats__item)}>
            <span className={clsx(css.label)}>Followers </span>
            <span className={clsx(css.quantity)}>{followers}</span>
          </li>
          <li className={clsx(css.stats__item)}>
            <span className={clsx(css.label)}>Views </span>
            <span className={clsx(css.quantity)}>{views}</span>
          </li>
          <li className={clsx(css.stats__item)}>
            <span className={clsx(css.label)}>Likes </span>
            <span className={clsx(css.quantity)}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  userName: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  followers: propTypes.number.isRequired,
  views: propTypes.number.isRequired,
  likes: propTypes.number.isRequired,
};

export default Profile;
