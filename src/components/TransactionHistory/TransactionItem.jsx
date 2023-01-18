import propTypes from 'prop-types';

// function toogleColor() {
//   let counter = 1;
//   return function chooseColor() {
//     counter += 1;
//     if (counter % 2 === 0) {
//       return 'white';
//     } else {
//       return 'rgb(185, 181, 181)';
//     }
//   };
// }

// const changeRowColor = toogleColor();

const TransactionItem = ({ type, amount, currency }) => (
  <tr>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);

TransactionItem.propTypes = {
  type: propTypes.string.isRequired,
  amount: propTypes.string.isRequired,
  currency: propTypes.string.isRequired,
};

export default TransactionItem;
