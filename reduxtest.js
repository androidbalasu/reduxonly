const { createStore }  = require('redux')

//Create  a store.
/*
Store has a state and reducers.
*/
// 1) Initialize the state
const initialState = {
    age: 21
}

//Create a reducer and pass the state and action based on which the appropriate reducer will
// work on the state and update it.
const myReducer = (state = initialState, action) => {
    const newState = {...state};

    if(action.type === 'ADD'){
        newState.age += action.val;
    }
    else if(action.type === 'SUBTRACT'){
        newState.age -= action.val;
    }

    return newState;
}

//Provide the reducer info to the state.
const store = createStore(myReducer);

//Subscribe to state changes in the store.
store.subscribe(() => {
    console.log(store.getState());
})


//Dispatch actions to the store.
//ADD command to the store.
store.dispatch ({type: 'ADD', val: 10})
store.dispatch ({type: 'SUBTRACT', val: 5})
