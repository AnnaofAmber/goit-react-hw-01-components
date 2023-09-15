import clsx from 'clsx';
import css from './TransactionHistory.module.css';
export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.head}>
        <tr>
          <th className={css.title}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.body}>
        {items.map((item, index) => (
          <tr
            className={clsx(css.row, index % 2 === 0 ? [css.odd] : [css.even])}
            key={item.id}
          >
            <td className={css.data}>{item.type}</td>
            <td className={css.data}>{item.amount}</td>
            <td className={css.data}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
