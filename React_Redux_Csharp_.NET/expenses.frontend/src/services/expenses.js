//This file is used to create the CRUD operations for the Expenses, where we use GET, SET, PUT, DELETE
import {ActionCreators} from "../app/expenseReducer";

export const getExpenses = async (dispatch) => {    //dispatch
    try{
        //place for api call, but for now we manually type some expense details
        const expenses = [
            {id: 1, description: "Groceries", amount: 100},
            {id: 2, description: "Gas", amount: 55.65},
            {id: 3, description: "Electricity", amount: 10.90},
            {id: 4, description: "Student loans", amount: 200},
        ];

        dispatch(ActionCreators.setExpenses(expenses));  //dispatch the expenses to the action creator
    }catch(error){
        console.log(error);
    }
}

export const newExpense = async (dispatch, expense) =>{
    try{
        //api call section
        dispatch(ActionCreators.newExpense({id: 10, description: expense.description, amount: expense.amount}));
    }catch(error){
        console.log(error);
    }
}