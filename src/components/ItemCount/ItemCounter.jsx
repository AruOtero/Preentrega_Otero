
import { useState } from "react"

export const ItemCounter = () => {
  const [count, setCount] = useState(1)


   const handleAdd = () => {
    setCount(count+1) 
  }; 
  return (
    <center>
    <p>{count}</p>
    <button onClick={handleAdd}>+</button>
    </center> 
  )
}

export default ItemCounter