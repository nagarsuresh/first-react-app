import './ExpenseForm.scss';

import useExpenseFormController from './ExpenseFormController';

import { formatDate } from '../utils/date-utils';
import { FC } from 'react';
import { ExpenseDto } from '../expenseitem/expense-dto';

export interface ExpenseFormProps {
  onSaveExpenseData: (dto: ExpenseDto) => void;
}

const ExpenseForm: FC<ExpenseFormProps> = (props: ExpenseFormProps) => {
  const { formValues, formValueChangeHandler, submitHandler } =
    useExpenseFormController(props);

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={(e) => formValueChangeHandler(e, 'title')}
            value={formValues.title}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            min="0.01"
            step="0.01"
            onChange={(e) => formValueChangeHandler(e, 'amount')}
            value={formValues.amount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={(e) => formValueChangeHandler(e, 'date')}
            value={formatDate(formValues.date)}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
