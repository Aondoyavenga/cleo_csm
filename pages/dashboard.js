import { Fragment, useEffect } from "react"
import Head from 'next/head'
import Feed from "../components/Feed"
import AppHeader from "../components/AppHeader"
import { useDispatch } from "react-redux"
import axios from "axios"
import variables from "../variables"
import { setProducts } from "../store/reducers/productsReducer"
const Home = () => {
    const dispatch = useDispatch()
    const handleGetProducts = () =>{
        axios.get(`${variables.appurl}/products`).then((result) =>{
           dispatch(setProducts(result.data))
            
        }).catch(error =>{
            console.log(error)
        })
    }
    useEffect(() =>{
        handleGetProducts()
    }, [])
    return (
        <Fragment>
            <Head>
                <title>Cleo | CMS</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-white h-screen">
                <AppHeader />
               <Feed />
            </div>
            
        </Fragment>
    )
}


export default Home
