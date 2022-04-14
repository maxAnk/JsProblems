import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/store/index'


export default function Shop() {

     const dispatch = useDispatch();
    // const actions = bindActionCreators(actionCreators, dispatch);
    const {withdrawMoney,depositeMoney} = bindActionCreators(actionCreators, dispatch);
    const balance = useSelector(state => state.amount)
    return (
        <div>
            <h2>Deposit/withdrow money</h2>
            {/* <button className='btn btn-primary mx-2' onClick={() => dispatch(actionCreators.withdrawMoney(100))}>-</button>
              update balance
            <button className='btn btn-primary mx-2' onClick={() => dispatch(actionCreators.depositeMoney(100))}>+</button> */}
            {/* 
            <button className='btn btn-primary mx-2' onClick={() => actions.withdrawMoney(100)}>-</button>
              update balance
            <button className='btn btn-primary mx-2' onClick={() => actions.depositeMoney(100)}>+</button> */}

            <button className='btn btn-primary mx-2' onClick={() => withdrawMoney(100)}>-</button>
              update balance : {balance}
            <button className='btn btn-primary mx-2' onClick={() => depositeMoney(100)}>+</button>


        </div>
    )
}
