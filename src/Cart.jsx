import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Removecart, decrement, incrementCart } from './Reducer/cartSlice';
import Head from './Head';
export default function Cart() {

    const select = useSelector((state) => state.counter.cart);
    const total = useSelector((state) => state.counter.grand)
    
    // useEffect(() => {
    //     const items = JSON.parse(localStorage.getItem('items'))
    //     const calc = localStorage.getItem('Total')
    //     setdata(items)
    //     setTotal(calc)
    // }, [])
    const dispatch = useDispatch()
    return (
        <>
            <Head className="position-absolute " />
            <div className='container-fluid  jj'>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>image</th>
                            <th>price</th>
                            <th>Qty</th>
                            <th>total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            select?.map((item, index) => {
                                return (
                                    <>
                                        <tr key={index} >
                                            <td>{index + 1}</td>
                                            <td>{item.title}</td>
                                            <td><img src={item.thumbnail} className='bca' height={100} width={100} alt="" /></td>
                                            <td>{item.price}</td>                                       
                                            <td>
                                                <div>
                                                    <button className='btn btn-success' onClick={() => dispatch(incrementCart(index))}>+</button><span className='mx-3'>{item.qty}</span>
                                                    <button className='btn btn-danger danger' onClick={() => dispatch(decrement(index))}>-</button>
                                                </div>
                                            </td>
                                            <td>{item.total}</td>
                                            <td><button onClick={() => { dispatch(Removecart([index])) }} className='btn btn-danger'>Remove</button></td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
                <h1>{total}</h1>
            </div>
        </>
    )
}
