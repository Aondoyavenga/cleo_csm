import React from 'react'
import Dashboard from "../components/Dashboard"
import Products from './Products'
import SideBar from './SideBar'
import Statistics from './Statistics'

const Feed = () => {
    return (
        <main className='grid grid-cols-1 md:grid-cols-2
            md: max-w-3xl xl:grid-cols-6 xl:max-w-[90%] mx-auto shadow-md pl-0 px-2 h-[85%]'>
            
            <div className="hidden xl:inline-grid col-span-1 overflow-auto scrollbar-none
                flex-col w-full bg-gray-50 
            ">
                <SideBar title='Menu' />
                <div className='flex-1 flex justify-end items-end h-full'>
                    <button className='w-full bg-gray-800 hover:bg-cleotrades_color-green text-white'>
                        Log Out
                    </button>
                </div>
            </div>
            <section className="col-span-3 w-full flex-1 flex justify-start overflow-y-auto pb-20 h-full
             overflow-auto scrollbar-none bg-gray-200 flex-col">
              
               <Statistics />

                <Products />

            </section>

            <section className='hidden xl:inline-grid md:col-span-2
                top-2 sticky overflow-auto scrollbar-none'>
                <div className='flex-1 top-4'>
                    {/* <MiniProfile />
                    <Todo title='Tod Do' /> */}
                </div>
            </section>
        </main>
       
    )
}

export default Feed
