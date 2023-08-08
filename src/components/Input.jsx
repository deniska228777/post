import '../Input.css';
import React from 'react';

const Input = React.forwardRef((props, ref) => {
    return(
        <div>
            <input id='textInput' ref={ref} {...props}/>
        </div>
    );
});

export default Input;