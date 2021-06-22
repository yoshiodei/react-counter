import React, {useState} from 'react';

const FunctionCounter = () => {

     const [count , setCount] = useState(0);
     const handleDecrease = () => {
         setCount(count - 1);
     }
     const handleIncrease = () => {
        setCount(count + 1);
    }

    return (
        <div style={{textAlign: 'center'}}>
             <h2>Function</h2>
                <h1>{count}</h1> 
                <button onClick={handleDecrease}>Decrease</button> 
                &nbsp;  
                <button  onClick={handleIncrease}>Increase</button> 
        </div>
    );
}

export default FunctionCounter;
