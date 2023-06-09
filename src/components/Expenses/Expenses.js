
import './Expenses.css';
import Card from '../UI/Card'
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";


function Expenses(props){

    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) =>{
    console.log('Expenses.js');
    console.log(selectedYear);
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

   


    return (
        <div className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <Card >
            <ExpensesList items={filteredExpenses}/>
           
        </Card>
        </div>
    )
}
export default Expenses;