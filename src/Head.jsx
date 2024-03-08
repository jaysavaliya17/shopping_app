import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsSearch } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Head({ searchid }) {
    const data = useSelector((state) => state.counter.cart);
    return (
        <div className='pt-2 main shadow-lg  sticky-top'>
            <div className='container '>
                <div className="row align-items-center">
                    <div className="col-3">
                        <div className="logo">
                            <a href="/">
                                <img src={require('./Img/1.png')} alt="" />
                                <h5 className='text-danger'>online-store</h5>
                            </a>
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="input-group">
                            <span class="input-group-text" id="basic-addon1"><BsSearch /></span>
                            <input type="text" class="form-control " onChange={(e) => { searchid(e.target.value) }} placeholder="Search entire store here..." aria-label="Username"
                                aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div className="col-3 d-flex justify-content-end">
                        <div className="icon d-flex align-items-center me-5 ">
                            <Link to={`/cart`}>
                                <div className='d-flex position-relative'>
                                    <span className='position-absolute d-flex align-items-center justify-content-center'>{ data.length }</span>
                                    <BsCart3 />
                                </div>
                            </Link>
                        </div>
                        <div className="sing-in">
                            <button className='btn btn-dark rounded-0 py-2 px-4'>sign-in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
