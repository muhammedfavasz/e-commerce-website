import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Rating from '../Rating'
import { useDispatch, useSelector } from 'react-redux'

import { byFastDelivery, byPrice, byRating, byStock, clear, gender, men } from '../../store/filterSlice';
import Product from "./Product"

const Filters = () => {

    const filterBy = useSelector(state => state.filter)
    // console.log(filterBy)
    const [selectedGender, setSelectedGender] = useState(filterBy.gender);

    const dispatch = useDispatch()

    const handleRatingFilter = (rating) => {
        dispatch(byRating(rating + 1));
    };

    const handleAscending = () => {
        dispatch(byPrice('lowToHigh'));
    };
    //
    // const handleMen = () => {
    //     dispatch(gender("men"));
    // };
    // const handleShirt = () => {
    //     dispatch(gender('shirt'));
    // };

    const handleDescending = () => {
        dispatch(byPrice('highToLow'));
    };

    const handleStockChange = () => {
        dispatch(byStock());
    };

    const handleFastDeliveryChange = () => {
        dispatch(byFastDelivery());
    };

    const handleClearFilters = () => {
        dispatch(clear());
    };

    const handleMenFilter = () => {
        dispatch(gender('men'));
    };

    const handleShirtFilter = () => {
        dispatch(gender('shirt'));
    };
    const handleWomenFilter = () => {
        dispatch(gender('women'));
    };
    const handleWatchFilter = () => {
        dispatch(gender('watch'));
    };
    const handleShoeFilter = () => {
        dispatch(gender('shoe'));
    };
    return (
        <div className='shop'>
            <div className="filters">
                <span className="title">Filter Products</span>
                <span>
                    <Form.Check
                        inline
                        label="Men"
                        name="group1"
                        id={`inline-1`}
                        type="checkbox"
                        onChange={handleMenFilter}
                        checked={filterBy.gender === 'men'}
                    />
                </span>
                <span>
                    <Form.Check
                        inline
                        label="shirt"
                        name="group1"
                        id={`inline-1`}
                        type="checkbox"
                        onChange={handleShirtFilter}
                        checked={filterBy.gender === 'shirt'}
                    />
                </span>
                <span>
                    <Form.Check
                        inline
                        label="women"
                        name="group1"
                        id={`inline-1`}
                        type="checkbox"
                        onChange={handleWomenFilter}
                        checked={filterBy.gender === 'women'}
                    />
                </span>
                <span>
                    <Form.Check
                        inline
                        label="watch"
                        name="group1"
                        id={`inline-1`}
                        type="checkbox"
                        onChange={handleWatchFilter}
                        checked={filterBy.gender === 'watch'}
                    />
                </span>
                <span>
                    <Form.Check
                        inline
                        label="shoe"
                        name="group1"
                        id={`inline-1`}
                        type="checkbox"
                        onChange={handleShoeFilter}
                        checked={filterBy.gender === 'shoe'}
                    />
                </span>
                <span>
                    <Form.Check
                        inline
                        label="Ascending"
                        name="group1"
                        type="radio"
                        id={`inline-2`}
                        onChange={handleAscending}
                        checked={filterBy.sort === 'lowToHigh'}
                    />
                </span>
                <span>
                    <Form.Check
                        inline
                        label="Descending"
                        name="group1"
                        type="radio"
                        id={`inline-3`}
                        onChange={handleDescending}
                        checked={filterBy.sort === 'highToLow'}
                    />
                </span>
                <span>
                    <Form.Check
                        inline
                        label="Include Out of Stock"
                        name="group1"
                        type="checkbox"
                        id={`inline-4`}
                        onChange={handleStockChange}
                        checked={filterBy.byStock}
                    />
                </span>
                <span>
                    <Form.Check
                        inline
                        label="Fast Delivery Only"
                        name="group1"
                        type="checkbox"
                        id={`inline-5`}
                        onChange={handleFastDeliveryChange}
                        checked={filterBy.byFastDelivery}
                    />
                </span>
                <span>
                    <label style={{ paddingRight: 10 }}>Rating: </label>
                    <Rating
                        rating={filterBy.byRating}
                        onClick={handleRatingFilter}
                        style={{ cursor: "pointer" }
                        }
                    />
                </span>
                <Button
                    variant="light"
                    onClick={handleClearFilters}
                >
                    Clear Filters
                </Button>
            </div>
            <Product />
        </div>
    )
}

export default Filters