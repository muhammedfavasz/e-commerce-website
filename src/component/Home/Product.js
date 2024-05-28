
import React from 'react'
// import SingleProdect from '../SingleProdect' !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// import Filters from '../Filters'!!!!!!!!!!!!!!!!!!!!!!!!
import HomeSingleProd from "./HomeSingleProd"
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'

const Product = () => {

    const prducts = useSelector(state => state.allproducts)
    const filterBy = useSelector(state => state.filter)

    const searchQuery = filterBy.searchQuery.toLowerCase();
    let filteredProducts = [...prducts];

    if (filterBy.sort === 'lowToHigh') {
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    } else if (filterBy.sort === 'highToLow') {
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }

    if (!filterBy.byStock) {
        // console.log("firstTTTT :" + !filterBy.byStock)
        filteredProducts = filteredProducts.filter((prodects) => prodects.inStock)
        // console.log("asdASDDDD : " + filteredProducts)
    }

    if (filterBy.byFastDelivery) {
        filteredProducts = filteredProducts.filter(product => product.fastdelivery);
    }

    if (filterBy.byRating) {
        filteredProducts = filteredProducts.filter((product) => product.ratings >= filterBy.byRating);
    }

    if (searchQuery) {
        filteredProducts = filteredProducts.filter((product) => product.name.toLowerCase().includes(searchQuery));
    }

    if (filterBy.gender === 'men') {
        filteredProducts = filteredProducts.filter((product) => product.gender === 'men');
    } else if (filterBy.gender === 'shirt') {
        filteredProducts = filteredProducts.filter((product) => product.gender === 'shirt');
    } else if (filterBy.gender === 'women') {
        filteredProducts = filteredProducts.filter((product) => product.gender === 'women');
    } else if (filterBy.gender === 'watch') {
        filteredProducts = filteredProducts.filter((product) => product.gender === 'watch');
    } else if (filterBy.gender === 'shoe') {
        filteredProducts = filteredProducts.filter((product) => product.gender === 'shoe');
    }


    return (
        <div className='home'>
            {/* <Filters /> */}
            <Container>
                <div className='homeProductContainer'>
                    {filteredProducts.map((prodects) => {
                        console.log(prducts.ratings)
                        return <HomeSingleProd prod={prodects} key={prodects.id} />
                    }
                    )}
                </div>
            </Container>

        </div>
    )
}

export default Product