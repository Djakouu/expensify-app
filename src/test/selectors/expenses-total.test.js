import { getExpensesTotal } from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";



test('should return 0 if no expenses', () => {
    const action = getExpensesTotal([]);
    expect(action).toBe(0);
});

test('should add up a single expense correctly', () => {
    const action = getExpensesTotal([expenses[0]]);
    expect(action).toBe(100);
});

test('should add up multiple expenses correctly', () => {
    const action = getExpensesTotal(expenses);
    expect(action).toBe(600);
});