import { useState, useEffect, useRef, useMemo}  from 'react'

function UseMemoSample() {
    const [number, setNumber] = useState(1)
    const [inc, setInc] = useState(0)

    const renders = useRef(1)

    //const sqrt = getSqrt(number)
    const sqrt = useMemo(() => getSqrt(number),[number])
    
    useEffect(() =>{
        renders.current = renders.current + 1
    }) 

    const handleClick = () =>{
        setInc((prevState) =>{
            console.log(prevState + 1);
            return prevState + 1
        })
    }



  return (
    <div>
    <input type="number" value={number} className="form-control" onChange={(e) => setNumber(e.target.value)}/>
    <h3>Renders: {renders.current}</h3>

    <h2 className="my-3">
        The square root of {number} is {sqrt}
    </h2>

    <button onClick={handleClick} className="btn btn-primary">
        Re render
    </button>
    </div>
  )
}

function getSqrt(n){
    for(let i = 0; i <= 10000; i++){
        console.log(i);
    }
    console.log('Expensive Function Called!');
    return Math.sqrt(n)
}

export default UseMemoSample