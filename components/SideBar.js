import { PlusCircleIcon, CheckIcon, PlusIcon } from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const lins = [
    {

        title: 'Brands',
    },
    {
        title: 'Products'
    },
    {
        title: 'Categories'
    },
    {
        title: 'Stock'
    }
]

const SideBar = ({title}) => {

    return (
        <div className='mt-4 w-full'>
            <div className="flex justify-between text-sm mb-5 shadow-sm py-3
            ">
                <h3
                    className='text-sm font-bold
                    text-cleotrades_color-green'
                > 
                    {title} 
                    
                </h3>
                {/* <button
                    className='text-gray-600 font-semibold'
                >See All</button> */}
            </div>
            
            {
               lins && lins.map((lin, index) =>(
                   <div
                        key={index}
                        className='flex items-center justify-between 
                            mt-3 hover:bg-gray-100
                        '
                   >
                       
                    
                       <div
                            className='flex-1 ml-4'
                       >
                           <h2
                                className='font-semibold text-sm cursor-pointer 
                                line-clamp-1 py-2'
                           > {lin.title} </h2>
                          
                       </div>

                       
                   </div>
               )) 
            }
        </div>
    )
}

export default SideBar
