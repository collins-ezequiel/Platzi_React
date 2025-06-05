import{useState} from "react";

const Counter = ()=>{
    const [count, setCount] = useState(0);


return(

    <div>
        <p>el contador esta en : {count} </p>
        <button onClick={()=> setCount(count+1)}>Incre</button>
        <button onClick={()=> setCount(count-1)}>Decre</button>

    </div>
)


}

export default Counter;