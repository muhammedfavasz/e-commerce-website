import { faker } from '@faker-js/faker';
import React, { createContext, useContext } from 'react'

export const Cart = createContext()


const Context = ({ children }) => {
    const prodects = [...Array(22)].map(() => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.url(),
        inStoke: faker.number.int({ min: 0, max: 10 }),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.number.int({ min: 1, max: 5 }),
    }))

    
    return (
        <Cart.Provider value={prodects}>
            {children}
        </Cart.Provider>
    )
}

export const CartState = () => {
   return useContext(Cart)
}

export default Context