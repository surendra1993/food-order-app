import React from 'react';

import Classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
    return (
       <div className={Classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
             {/* Id is passed as ...props.input */}
            <input ref={ref} {...props.input}/>
       </div>
    );
});

export default Input;