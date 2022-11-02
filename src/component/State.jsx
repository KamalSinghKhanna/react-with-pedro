import React, {useState} from 'react'

const State = () => {
   const [show, setShow] = useState(true)
  return (
    <div style={{display:"flex", flexDirection:"column",  alignItems:"center", justifyContent:"center"}}>
      <button onClick={()=>{setShow(!show)}}>Show/Hide</button>
        <h1 className={!show ? "green" : ""}>Kamal Khanna</h1>
    </div>
  )
}

export default State