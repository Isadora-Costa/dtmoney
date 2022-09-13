import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

export function TransactionsTable() {
  const { transactions } = useTransactions();
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.transactionTitle}</td>
                <td className={transaction.transactionType}>
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  }).format(transaction.transactionAmount)}</td>
                <td>{transaction.transactionCategory}</td>
                <td>
                  {new Intl.DateTimeFormat('en-US').format(
                    new Date(transaction.createdAt)
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Container>
  );
};