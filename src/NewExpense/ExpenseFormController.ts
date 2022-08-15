import { ChangeEvent, FormEvent, useState } from "react";
import { ExpenseDto } from "../expenseitem/expense-dto";
import { ExpenseFormProps } from "./ExpenseForm";

const useExpenseFormController = (props: ExpenseFormProps) => {
  const [formValues, setFormValues] = useState<ExpenseDto>({
    title: '',
    date: new Date(),
    amount: 0
  });

  const formValueChangeHandler = (
    event: ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    setFormValues((prevState: ExpenseDto) => {
      if (fieldName === 'date') {
        return {
          ...prevState,
          [fieldName]: new Date(event.target.value + ' PST')
        };
      } else {
        return { ...prevState, [fieldName]: event.target.value };
      }
    });
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    props.onSaveExpenseData(formValues);
    setFormValues({ title: '', amount: 0, date: new Date() });
  };


  return {
    formValues,
    formValueChangeHandler,
    submitHandler
  }

}

export default useExpenseFormController;