import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux"
export default function About() {
    const [user, setuser] = useState([])
    const count = useSelector((state)=>state.data)
    useEffect(() => {
        fetch('https://dummyjson.com/quotes')
            .then(res => res.json())
            .then(res => setuser(res.quotes))

    }, [])
    console.log(user)


    return (
        <div className='flex flex-col items-center bg-white-400'>
            {
                user.map((i) => (
                 (i.id === count) ?  
                  <div class=" mt-2 max-w-sm rounded overflow-hidden shadow-lg bg-light">
                      
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{i.id}<span className='ml-2'>{i.author}</span></div>
                    <p class="text-gray-800 text-base ">
                      {i.quote}
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#motivation</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#social</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#technical</span>
                  </div>
                </div>
                : <h1></h1>
                     
                ))
            }
        </div>
    )
}
