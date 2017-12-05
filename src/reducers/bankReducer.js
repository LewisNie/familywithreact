import constants from '../constants';

const initialState = {
    balance : 0
};
//state=initialState is es6 default function parameter
const bankReducer = (state = initialState, action) => {
    console.log(action);
    console.log(state);
    switch (action.type){
        case constants.DEPOSIT_FROM_ACCOUNT:
            return {balance :state.balance + parseFloat(action.amount)};
        case constants.WITHDRAW_FROM_ACCOUNT:
            return {balance :state.balance - parseFloat(action.amount)};
        default:
            return state;
    }
}

export default bankReducer;