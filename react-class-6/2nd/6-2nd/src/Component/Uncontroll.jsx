import React, { useRef } from 'react'

const Uncontroll = () => {
    const elementref = useRef(null)
    const elementref2 = useRef(null)
    const elementref3= useRef(null)

    const handleclick = ()=>{
            elementref.current.style.backgroundColor = getrandomcolor()
            elementref2.current.style.backgroundColor = getrandomcolor()
            elementref3.current.style.backgroundColor = getrandomcolor()
    }

    const  getrandomcolor =()=>{
        const colors = ["red","green", "blue","yellow"]
  
        const random = Math.floor(Math.random()*colors.length)
        console.log(colors[random])
     return colors[random]
}
  return (
    <>
    <div onClick={handleclick} ref={elementref}>
        <button ref={elementref3} onClick={handleclick}>change color</button>
   
    </div>
      <div onClick={handleclick} ref={elementref2}>hii</div>
      </>
  )
}

export default Uncontroll