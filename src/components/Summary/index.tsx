import incomeImg from "../../assets/income.svg";
import outgingsImg from "../../assets/outcome.svg";
import balanceImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  const amount = transactions.reduce((acc, transaction) => {
    if (transaction.transactionType === 'deposit') {
      acc.deposit += transaction.transactionAmount;
      acc.total += transaction.transactionAmount;
    } else {
      acc.withdrawal += transaction.transactionAmount;
      acc.total -= transaction.transactionAmount;
    }
    return acc;
  }, {
    deposit: 0,
    withdrawal: 0,
    total: 0,
  });

  const deposit = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount.deposit);

  const withdrawal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount.withdrawal);

  const total = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount.total);

  const splitter = {
    cents: deposit.split("."),
    pennies: withdrawal.split("."),
    dimes: total.split("."),
  };

  const money = {
    deposit: splitter.cents,
    withdrawal: splitter.pennies,
    total: splitter.dimes,
  };

  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Income" />
        </header>
        <strong>{money.deposit[0]}<span>.{money.deposit[1]}</span></strong>
      </div>
      <div>
        <header>
          <p>Outgoings</p>
          <img src={outgingsImg} alt="Outgoings" />
        </header>
        <strong>{money.withdrawal[0]}<span>.{money.withdrawal[1]}</span></strong>
      </div>
      <div className="content-highlight">
        <header>
          <p>Balance</p>
          <img src={balanceImg} alt="Balance" />
        </header>
        <strong>{money.total[0]}<span>.{money.total[1]}</span></strong>
      </div>
    </Container>
  );
}