import{useEffect, useState} from "react";

const CounterWithEffect = () =>{

    const [count, setCount] = useState(0);

    useEffect(()=>{

        console.log(`El contador cambió a: ${count}`)

    },[count] )
    return(

        <div>
            <p>el contador esta en : {count} </p>
            <button onClick={()=> setCount(count+1)}>Incre</button>
            <button onClick={()=> setCount(count-1)}>Decre</button>

        </div>
    )

}

export default CounterWithEffect;