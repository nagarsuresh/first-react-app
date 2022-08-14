export interface ExpenseDto {
  id?: string;
  title: string;
  amount: number;
  date: Date | null;
}