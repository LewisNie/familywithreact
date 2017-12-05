import React, {Component} from 'react';
import {render} from 'react-dom';
import BankApp from './components/bankApp';
import BankStore from './store/bankStore';
import Constants from './constants';
import bankAction from './actions/bankAction';
import {connect, Provider} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        balance: state.balance
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        onDeposit: (amount)=>dispatch(bankAction.depositIntoAccount(amount)),
        onWithdraw: (amount)=>dispatch(bankAction.withdrawFromAccount(amount))
    }
};
const BankAppContainer = connect(mapStateToProps, mapDispatchToProps)(BankApp);
class App extends Component {
    render(){
        return (
            <Provider store={BankStore}>
                <BankAppContainer />
            </Provider>
        )
    }
}
render(<App/>, document.getElementById("root"));
