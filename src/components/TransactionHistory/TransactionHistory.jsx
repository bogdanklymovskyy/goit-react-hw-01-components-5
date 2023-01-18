import propTypes from 'prop-types';
import TransactionItem from './TransactionItem.jsx';
import clsx from 'clsx';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => (
  <table className={clsx(css['transaction-history'])}>
    <thead>
      <tr className={clsx(css['header'])}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(({ id, type, amount, currency }) => {
        return (
          <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        );
      })}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  transactions: propTypes.arrayOf(propTypes.object).isRequired,
};

export default TransactionHistory;

//   {
//     "id": "7b119d71-42e6-4c42-a141-6818b07bb9ff",
//     "type": "invoice",
//     "amount": "275.07",
//     "currency": "AWG"
//   },
