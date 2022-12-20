import React, { useState } from 'react'
import { Caro } from '../../Dummy-data'
import'./Carosel.css';
export default function Carosel() {
    const [details,setdetails]=useState(0)
    
    const next=()=>{
     if(details===2)
     {
      setdetails(Caro.length-2-1)
     }
     else{

     
      setdetails(details+1)
      
      console.log("next==>",details)
    }}
    var Previous=()=>{
      if(details===0)
      {
        setdetails(Caro.length-1)
      }
      else{

      setdetails(details-1)
      console.log("prev===>",details)
      }
    }

  return (
    <>
    
    
    <div className='nature'>
        {Caro.map((data,key)=>
       
      
         <div className='imag'>
          {console.log(key)}

<img  src={data.pic} className={key===details?"image":"nimg"}/> 

 </div> 
   )}
   <div className='button d-flex justify-content-between pl-5 pr-5'>
<button type="button" class="btn btn-dark"id="b1"onClick={()=>{Previous(details)}} >Previous</button>
<button type="button" class="btn btn-dark"id="b2"onClick={()=>{next(details)}} >Next</button>
    </div> 
    </div>
    
    
    </>
  )
}
