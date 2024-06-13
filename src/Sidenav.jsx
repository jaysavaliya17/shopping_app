import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Sidenav() {
    const [data, setData] = useState(null)
    useEffect(() => {
        setTimeout(()=>{
            axios({
                method: 'get',
                url: 'https://dummyjson.com/products/category-list'
            })
                .then(function (response) {
                    setData(response.data)
                });
        },1000)
    }, [])
    return (
        <div className='sidenav'>
            <ul>
                <Link to={`/`} className='text-text-decoration-none'><li className='text-white ps-3 '>All category</li></Link>
                {
                    data == null
                    ?
                    <div className='loader3 d-flex justify-content-center align-items-center'>
                        <div className='spinner'></div>
                    </div>
                    :
                    data.map((item, index) => {
                        return (
                            <>
                            <Link to={`/${item}`}>
                                <li><a href="#" className='text-decoration-none'>{item}</a></li>
                            </Link>
                            </>
                        )
                    })
                }
            </ul>
        </div>
    )
}
