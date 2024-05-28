import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import Rating from "./Rating";
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux'
import { changeqty, remove } from '../store/cartSlice';

const Cart = () => {

    const [total, setTotal] = useState(0);

    const cart = useSelector(state => state.cart)

    const dispatch = useDispatch()

    const removeCart = (prod) => {
        dispatch(remove(prod))
    }

    useEffect(() => {
        setTotal(
            cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
        );
    }, [cart]);
    

    const changeQty = (prod) => {
        dispatch(changeqty(prod))
    }

    return (
        <div className='home'>
            <div className='productContainer cart'>
                <ListGroup>
                    {
                        cart.map(prod => (
                            <ListGroup.Item key={prod.id}>
                                <Row>
                                    <Col md={2}>
                                        <Image
                                            src={prod.image} alt={prod.name} fluid rounded />
                                    </Col>
                                    <Col md={2}>
                                        <span>{prod.name}</span>
                                    </Col>
                                    <Col md={2}>₹ {prod.price}</Col>
                                    <Col md={2}>
                                        <Rating rating={prod.ratings} />
                                    </Col>
                                    <Col md={2}>
                                        <Form.Control
                                            as="select"
                                            value={prod.qty}
                                            
                                            onChange={(event) => changeQty({ id: prod.id, qty: event.target.value })}
                                        >
                                            {[...Array(prod.inStock).keys()].map((x) => {
                                                return <option key={x + 1}>{x + 1}</option>;
                                            })}
                                        </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button
                                            type="button"
                                            variant="light"
                                        >
                                            <AiFillDelete fontSize="20px" onClick={() => removeCart(prod.id)} />
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </div>
            <div className='filters summary'>
                <span className='title'>Subtotal ({cart.length})</span>
                <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
            </div>

        </div>
    )
}

export default Cart




