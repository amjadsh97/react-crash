import React, {useState} from "react";

function CounterExample() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>{count}</h1>
            <h1 onClick={() => setCount(count + count)}>Plus</h1>
            <h1 onClick={() => setCount(count - count)}>minus</h1>
        </div>
    )
}

export default CounterExample;
