import clsx from 'clsx';
import propTypes from 'prop-types';
import css from './StatisticsItem.module.css';

function makeRandomColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
  return bgColor;
}

const StatisticsItem = ({ label, percentage }) => {
  return (
    <li
      style={{ backgroundColor: makeRandomColor() }}
      className={clsx(css.item)}
    >
      <span className={clsx(css.label)}>{label} </span>
      <span className={clsx(css.percentage)}>{percentage}%</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};

export default StatisticsItem;
