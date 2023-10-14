import { Fragment, useState } from 'react'
import ProductListItem from "./components/ProductListItem";
import ProductListLi from './components/ProductListLi'
import SignUp from './components/SignUp';
import { Routes, Route, useLocation } from 'react-router-dom'


import ProductList from './components/ProductList'


import { v4 as uuidv4 } from 'uuid'
// Database
import {laptops} from './laptop'
import {tvs} from './tv'
import {phones} from './Phone'
import Home from './Home'
import Login from './components/Login';

function Main({query}) {

    const [selectedCategory, setSelectedCategory] = useState(null);
    const handleClick = (event) => {
        setSelectedCategory(event.target.value);
    };
    // -------------filterd items-------------

    const filteredItems = phones.filter(
        (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );

      function filteredData(products, selected, query) {
        let filteredProducts = products;
    
        // Filtering Input Items
        // if (query) {
        //   filteredProducts = filteredItems;
        // }
    
        // Applying selected filter
        switch(selected) {
            case "cheapest":
                filteredProducts = filteredProducts.sort(
                    (prevObj, nextObj)=>{
                        return(prevObj.price - nextObj.price);
                    }
                )
                break;

            case "expensive":
                filteredProducts = filteredProducts.sort(
                    (prevObj, nextObj)=>{
                        return(nextObj.price - prevObj.price);
                    }
                )
                break;

            case "most-viewed":
                filteredProducts = filteredProducts.sort(
                    (prevObj, nextObj)=>{
                        return(prevObj.view - nextObj.view);
                    }
                )
                break;
        }
    
        return filteredProducts.map(
          ({ price, view, rating, thumbnail, title, id,url }) => {
            return (
                <ProductListItem
                id={id}
                key={uuidv4}
                thumbnail={thumbnail}
                view={view}
                rating={rating}
                price={price}
                title={title}
                url={url}
            />) 
          }  
        );
      }

    const {pathname} = useLocation();
    
    const catlistarray = pathname.split('/');
    
    let result = null;

    if(catlistarray[catlistarray.length-1] == "laptops") {
        result = filteredData(laptops, selectedCategory, query);
    } else if(catlistarray[catlistarray.length-1] == "tvs") {
         result = filteredData(tvs, selectedCategory, query);
    } else if(catlistarray[catlistarray.length-1] == "phones") {
        result = filteredData(phones, selectedCategory, query);
    }
    
    return (
            <Fragment>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
                <Routes>
                    <Route path='/list' element={<ProductList forward={result} handleClick={handleClick}/>} />
                </Routes>
                <Routes>
                    <Route path='/list/:catlist' element={<ProductList forward={result} handleClick={handleClick}/>} />
                </Routes>
                <Routes>
                    <Route path='/list/:catlist/:productId' element={<ProductListLi />} />
                </Routes>
                <Routes>
                    <Route path='/login' element={<Login/>}></Route>
                </Routes>
                <Routes>
                    <Route path='/signup' element={<SignUp/>}></Route>
                </Routes>
            </Fragment>
    )
}
export default Main