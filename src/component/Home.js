// import React from 'react'
// import { CartState } from '../context/Context'
// import SingleProdect from './SingleProdect'
// import Filters from './Filters'
// import { useSelector } from 'react-redux'
// import { byFastDelivery, byPrice, byRating, byStock, clear } from '../store/filterSlice'

// const Home = () => {
//   const prodects = CartState()
//   const filterBy = useSelector(state => state.filter)
//   // console.log("filterBy : " + filterBy)
//   const searchQuery = filterBy.searchQuery.toLowerCase();
//   let filteredProducts = [...prodects];


//   if (filterBy.sort === 'lowToHigh') {
//     filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
//   } else if (filterBy.sort === 'highToLow') {
//     filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
//   }

//   if (!filterBy.byStock) {
//     // console.log("firstTTTT :" + !filterBy.byStock)
//     filteredProducts = filteredProducts.filter((prodects) => prodects.inStoke)
//     // console.log("asdASDDDD : " + filteredProducts)
//   }

//   if (filterBy.byFastDelivery) {
//     filteredProducts = filteredProducts.filter(product => product.fastDelivery);
//   }

//   if (filterBy.byRating) {
//     filteredProducts = filteredProducts.filter((product) => product.ratings >= filterBy.byRating);
//   }

//   if (searchQuery) {
//     filteredProducts = filteredProducts.filter((product) => product.name.toLowerCase().includes(searchQuery));
//   }

//   return (
//     <div className='home'>
//       <Filters />
//       <div className='productContainer'>
//         <h1>hahahah</h1>
//         {filteredProducts.map((prodects) => {
//           return <><SingleProdect prod={prodects} key={prodects.id} />
//             <h1>hohohhihio</h1>
//           </>
//         }
//         )}
//       </div>

//     </div>
//   )
// }

// export default Home