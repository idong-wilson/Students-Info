import React, { useState } from 'react';
import Button from './Button';

export default function ButtonDisplay() {
    let buttons = [
        {color: 'primary', step: 1},
        {color: 'secondary', step: 10},
        {color: 'success', step: 100},
        {color: 'danger', step: 1000},
    ]

    const [count, setCount] = useState(0);

    function handleClick(step){
        setCount(count + step);
    };
    return (
        <>
            <h1>Kekamba Nation</h1>
            
            {buttons.map((button, idx) => <Button color={button.color} step={button.step} key={idx} handleClick={handleClick}/>)}
        </>
                
    )
}