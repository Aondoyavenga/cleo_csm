import { PlusCircleIcon } from '@heroicons/react/outline'
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { selectProducts } from '../store/reducers/productsReducer'
import Title from './Title'

const RenderList = ( {counter, brand,quantity, price, title} ) =>{
    return (
        <Fragment>
            <tr className='py-3 hover:bg-gray-100'>
                <td className='text-sm'> {counter} </td>
                <td className='text-sm line-clamp-1 cursor-pointer'>{title}</td>
                <td className='text-sm'>{brand}</td>
                <td className='text-sm'>{quantity}</td>
                <td className='text-sm text-red-500'>{(price * 2).toLocaleString()}</td>
                <td className='text-sm text-cleotrades_color-green'>{price.toLocaleString()}</td>
            </tr>
        </Fragment>
    )
}

const Products = () => {
    const products = useSelector(selectProducts)
    return (
        <div className='w-full p-3'>
            <div className='flex flex-row w-full items-center justify-between'>
                <Title title='Products List' />
                <PlusCircleIcon className='h-6 w-6 text-cleotrades_color 
                hover:text-cleotrades_color-green Btn' />
            </div>

            <table className='w-full table'>
                <thead>
                    <th>S/N</th>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Qty</th>
                    <th>Pur. Price</th>
                    <th>Salling Price</th>
                </thead>
                <tbody>
                    {
                        products && 
                        products.map((product, index) =>(
                            <RenderList 
                                counter={index+1}
                                key={index} {...product} 
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Products
