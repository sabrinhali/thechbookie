import React from 'react'

export default function Header() {
  return (
    <div>
        <div className='bg-yellow-400 w-[100%] h-[100px] flex justify-between py-5 px-20'>
            <h1 className='text-4xl font-bold'>Code Xalka</h1>
            <div>
                <ul className='flex gap-20 text-3xl'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
