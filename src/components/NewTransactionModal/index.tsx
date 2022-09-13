import { FormEvent, useState } from "react";
import Modal from "react-modal";
import closeIcon from "../../assets/close.svg";
import { useTransactions } from "../../hooks/useTransactions";
import incomeIcon from "../../assets/income.svg";
import outgoingIcon from "../../assets/outcome.svg";
import { Container, TransactionTypeContainer, SelectTypeBox } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const {createTransaction} = useTransactions();

  const [transactionTitle, setTransactionTitle] = useState('');
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionCategory, setTransactionCategory] = useState('');

  const [transactionType, setTransactionType] = useState('deposit');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      transactionTitle,
      transactionAmount,
      transactionCategory,
      transactionType
    })

    setTransactionTitle('');
    setTransactionAmount(0);
    setTransactionCategory('');
    setTransactionType('deposit');

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeIcon} alt="Close form"/>
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Create transaction</h2>
        <input 
          placeholder="Title"
          value={transactionTitle}
          onChange={event => setTransactionTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Value"
          value={transactionAmount}
          onChange={event => setTransactionAmount(Number(event.target.value))}
        />

      <TransactionTypeContainer>
        <SelectTypeBox
          type="button"
          isActive={transactionType === 'deposit'}
          activeColor="green"
          onClick={() => {setTransactionType('deposit');}}
        >
          <img src={incomeIcon} alt="Income"/>
          <span>Income</span>
        </SelectTypeBox>

        <SelectTypeBox
          type="button"
          isActive={transactionType === 'withdrawal'}
          activeColor="red"
          onClick={() => {setTransactionType('withdrawal');}}
        >
          <img src={outgoingIcon} alt="Outgoings"/>
          <span>Outgoings</span>
        </SelectTypeBox>
      </TransactionTypeContainer>

        <input
          placeholder="Category"
          value={transactionCategory}
          onChange={event => setTransactionCategory(event.target.value)}
        />
        <button type="submit">Create</button>
      </Container>
    </Modal>
  );
}
