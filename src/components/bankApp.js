import React, {Component, PropTypes} from 'react';

class BankApp extends Component {
    constructor(...args){
        super(...args);
        console.log(this);
    }
    handleDeposit(){
        this.props.onDeposit(this.refs.amount.value);
        this.refs.amount.value = '';
    }
    handleWithdraw(){
        this.props.onWithdraw(this.refs.amount.value);
        this.refs.amount.value = '';
    }
    render(){
        return (
            <div>
                <header></header>
                <div>
                    <input type="text" placeholder="Enter Amount" ref="amount" />
                    <button onClick={this.handleDeposit.bind(this)}>Deposit</button>
                    <button onClick={this.handleWithdraw.bind(this)}>Withdraw</button>
                </div>
            </div>
        )
    }
}

BankApp.propTypes = {
    balance: PropTypes.number,
    onDeposit: PropTypes.func,
    onWithdraw: PropTypes.func
};

export default BankApp;