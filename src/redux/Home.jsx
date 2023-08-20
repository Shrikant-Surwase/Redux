import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import About from './About';
import { increment,decrement, addbyvalue} from './createSlice';
export default function Home() {
const count = useSelector((state)=>state.data)
const dispatch= useDispatch();
  return (
    <>
    <div className='flex flex-col items-center'>
      <h2 className='mt-5 font-bold text-3xl' >Upto 30 Only you can change the article Number by using the following buttons</h2>
            <h2 className='mb-5 mt-5 font-bold text-3xl '>{count}</h2>
            <div>
                <button className='btn bg-red-500 mr-4 text-light-400 hover:border-black' onClick={() => dispatch(increment())}>Next</button>
                <button className='btn bg-dark text-light mr-4 hover:border-black' onClick={() => dispatch(decrement())}>Previous</button>
                <button className='btn bg-dark text-light hover:border-black' onClick={() => dispatch(addbyvalue(2))}>JumpBy2</button>
            </div>

        </div>
        <About/>
    </>
  )
}
