import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { AiOutlineStock } from "react-icons/ai";
import { Link, useParams } from 'react-router-dom';
export default function Cardx({ search }) {
    const [product, setProduct] = useState(null)
    const [searchCard, setSearchCard] = useState(null)
    const { title } = useParams();
    useEffect(() => {
        setTimeout(() => {
            let url
            if (title?.length > 0) {
                url = `https://dummyjson.com/products/category/${title}`
            }
            else {
                url = `https://dummyjson.com/products?limit=100&skip=0`
            }
            axios({
                method: 'get',
                url: url,
            })
                .then(function (response) {
                    setSearchCard(response.data.products)
                    setProduct(response.data.products)
                });
        }, 1000)
    }, [title])
    useEffect(() => {
        if (searchCard != null) {
            let data = product.filter((item) => {
                return item.title.toLowerCase().includes(search.toLowerCase())
            })
            setSearchCard(data)
        }
    }, [search])
    return (
        <>
            {
                product == null ?
                    <div className='d-flex justify-content-center align-content-center loader2'>
                        <div className='spinner'></div>
                    </div>
                    :
                    searchCard.map((item, index) => {
                        return (
                            <div className="col-lg-4 col-md-6">
                                <Link to={`/detail/${item.id}`}>
                                    <Card className='cardRight p-0'>
                                        <Card.Img variant="top" src={item.thumbnail} loading='lazy' />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>{item.description}</Card.Text>
                                            <div className='d-flex justify-content-between'>
                                                <p style={{ color: 'green', fontWeight: 'bold' }}>Price : ${item.price}</p>
                                                <span className='text-black' style={{ fontWeight: 'normal' }}>{item.discountPercentage}%off</span>
                                                <span className='stock'><AiOutlineStock /> {item.stock} </span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                        )
                    })
            }
        </>
    )
}


