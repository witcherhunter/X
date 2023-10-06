import React from 'react'
import InStory from './components/InStory'
import Slider from './components/Slider'
import ProductSliders from './components/ProductSliders'
import ListItem from './components/ListItem'
import BrandSlider from './components/BrandSlider'
import ProductsOffersSlider from './components/ProductsOffersSliders'
import BestSales from './components/BestSales'
function Home() {
    return (
        <div>
            <InStory />
            <Slider />
            <ProductSliders />
            <ListItem />
            <BrandSlider />
            <ProductsOffersSlider />
            <BestSales />
        </div>
    )
}

export default Home
