import { useState } from "react";
export const Count = () => {
    const [c, test] = useState(0)
    const add = (a)=>{
        console.log(a)
        test(a => a + 1)
        test(a => a + 1)
        test(a => a + 1)
    }
    const sub = (a)=>{
        if(a){
            test(a-1)
        }
    }
    const resetVal = ()=>{
        test(0)
    }
    return (
        
        <>
        <button onClick={() => add(c)}>+</button>
        <p>{c}</p>
        <button onClick={() => sub(c)}>-</button><br/>
        <button onClick={resetVal}>Reset</button>
        </>
    )
}