import constants from '../constants';

const bankAction = {
    depositIntoAccount(amount){
        return {
            type:constants.DEPOSIT_FROM_ACCOUNT,
            amount:amount
        }
    },
    withdrawFromAccount(amount){
        return {
            type:constants.WITHDRAW_FROM_ACCOUNT,
            amount:amount
        }
    }
};

export default bankAction;