import { ArrowUpIcon, CursorClickIcon, LockOpenIcon, UserGroupIcon } from '@heroicons/react/outline'
import React, { Fragment } from 'react'
import Title from './Title'

const Card = ({title, icon}) => {
    return (
        <div className='md:col-span-2 lg:col-span-2 xl:col-span-2 sm:col-span-1
        bg-white shadow-md w-full  rounded-md'
        >
            
           <div className='w-full flex-1 flex-col px-2 py-2'>
               <div className='flex w-full justify-between items-center'>
                   <div className='bg-cleotrades_color-yellow text-white
                       px-3 py-3 rounded
                   '>
                       {icon}
                   </div>
                   <div className='flex flex-1 flex-col ml-2'>
                       <p className='text-sm text-cleotrades_color font-semibold'>{title}</p>
                       <div className=' w-full flex flex-row'>
                           <h3 className='flex flex-row text-lg font-bold'>71, 897
                           <span
                               className='text-cleotrades_color-green
                               flex flex-row text-sm
                               '
                           >
                               <ArrowUpIcon 
                               className='h-3 w-3 mt-2' />
                               <span className='mt-1'>22.2%</span>
                           </span>
                           </h3>
                       </div>
                   </div>
               </div>
           </div>
           <div className='w-full bg-gray-200 p-2'>
               <p className='text-cleotrades_color-yellow text-sm
                   cursor-pointer hover:text-cleotrades_color-green
               '>View Chart</p>
           </div>
       </div>
    )
}
const CARDS = [
    {
        title: 'Total Views',
        icon: <UserGroupIcon className='h-6 w-6' />
    },
    {
        title: 'Avg. Open Rate',
        icon: <LockOpenIcon className='h-6 w-6' />
    },
    {
        title: 'Avg. Click Rate',
        icon: <CursorClickIcon className='h-6 w-6' />
    }
]
const Statistics = () => {
    return (
        <div className='w-full'>
            <Title title='Last 30 Days' />
            <div className='grid grid-cols-1 md:grid-cols-6 gap-2 px-3 py-3'>
               {
                   CARDS?.map((card, index) =>{
                       return (
                            <Card 
                                key={index}
                                title={card.title}
                                icon={card.icon}
                            />
                       )
                   })
               }
            </div>
        </div>
    )
}

export default Statistics
