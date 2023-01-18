import clsx from 'clsx';
import propTypes from 'prop-types';
import css from './SectionStatistics.module.css';
import StatisticsItem from './StatisticsItem.jsx';

const SectionStatistics = ({ title, stats }) => {
  return (
    <section className={clsx(css.statistics)}>
      {title && <h2 className={clsx(css.title)}>{title}</h2>}
      <ul className={clsx(css.statList)}>
        {stats.map(statData => (
          <StatisticsItem
            key={statData.id}
            label={statData.label}
            percentage={statData.percentage}
          />
        ))}
      </ul>
    </section>
  );
};

SectionStatistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(propTypes.object).isRequired,
};

export default SectionStatistics;
