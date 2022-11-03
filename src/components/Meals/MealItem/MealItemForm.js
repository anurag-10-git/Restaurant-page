import React from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
       <Input label="Amount" input={{
        id: 'amount_'+ props.id,
        type: 'number',
        min:'1',
        max: '5',
        step: '1',
        defaultValue: '1'
       }}/>
       {/* //These all are built in attributes for iinput elements */}
       <button>+ Add</button>
    </form>
  )
}

export default MealItemForm;