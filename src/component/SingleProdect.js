import React from 'react'
import { Button, Card } from 'react-bootstrap'
import "./style.css"
import Rating from './Rating'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from "../store/cartSlice"


const SingleProdect = ({ prod }) => {
    console.log(prod)
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)

    const addToCart = (prod) => {
        console.log("Adding to cart:", prod)
        dispatch(add(prod))
    }

    const removeCart = (prod) => {
        dispatch(remove(prod))
    }

    const isProductInCart = cart.find(item => item.id === prod.id);

    return (
        <div className='products'>
            <Card className='productsCart'>
                <Card.Img variant="top" src={prod.image} alt={prod.name} />
                <Card.Body >
                    <Card.Title >
                        {prod.name}
                    </Card.Title>

                    <span>₹ {prod.price}</span>
                    {prod.fastdelivery ? (
                        <div>Fast Delivery</div>
                    ) : (
                        <div>4 days delivery</div>
                    )}
                    <div style={{ paddingBottom: "10px" }}>
                        <Rating rating={prod.ratings} />
                    </div>
                    {isProductInCart ? (<Button variant='danger' onClick={() => removeCart(prod.id)} >Remove from cart</Button>
                    ) : (
                        <Button disabled={!prod.inStock} onClick={() => addToCart(prod)}>
                            {!prod.inStock ? 'Out of Stock' : "Add to cart"}
                        </Button>)}
                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleProdect