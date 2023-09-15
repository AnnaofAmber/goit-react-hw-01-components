import clsx from 'clsx';
import css from './Statistics.module.css';

export const Statistics = props => {
  const { title, stats } = props;

  return (
    <section className={css.section}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.list}>
        {stats.map((stat, index) => (
          <li
            className={clsx(css.item, index % 2 === 0 ? [css.odd] : [css.even])}
            key={stat.id}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
