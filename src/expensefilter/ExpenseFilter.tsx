import './ExpenseFilter.scss';

import { ChangeEvent, FC } from 'react';

interface ExpenseFilterProps {
  selectedYear: string | undefined;
  onYearChange: (year: string) => void;
}

const ExpenseFilter: FC<ExpenseFilterProps> = (props: ExpenseFilterProps) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select
          value={props.selectedYear}
          onChange={(event: ChangeEvent<HTMLSelectElement>) =>
            props.onYearChange(event.target.value)
          }
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
