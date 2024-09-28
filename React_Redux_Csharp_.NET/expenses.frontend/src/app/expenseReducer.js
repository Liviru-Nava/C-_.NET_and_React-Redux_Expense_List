//In this file, we will create an initial state, Action Types, action Creators and the Reducer

//create the initial state
const initialState = {
    expenses: [],
}

//export the action types
export const ActionTypes={
    SET_EXPENSES: "SET_EXPENSES",
    NEW_EXPENSE: "NEW_EXPENSE",
    
}

//export the action creator
export const ActionCreators ={
    setExpenses: (payload) => ({type: ActionTypes.SET_EXPENSES, payload}),  //this is a function that takes one parameter and returns an object which contains the type of the action and the contents of the parameter passed to the function.

    newExpense: (payload) => ({type: ActionTypes.NEW_EXPENSE, payload}),
}

//export the reducer
export const expenseReducer = (state= initialState, action) => { //we receive the state and the action to the reducer
    switch(action.type){    //based on the action type passed to the reducer, the reducer will return the responses 
        case ActionTypes.SET_EXPENSES:
            return {...state, expenses: [...action.payload]};   //... means spread operators, which means we are copying the contents of the state and creating a new state object. 
        case ActionTypes.NEW_EXPENSE:
            return {...state, expenses: [...state.expenses, action.payload]};
        default:
            return state;
    }
}