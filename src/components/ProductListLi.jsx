import { useState, useEffect, Fragment } from 'react'
import SliderProductListli from './SliderProductListLi'
import { Container } from 'react-bootstrap'
import ProductListDescreption from './ProductListDescreption'
import Truck from './Truck'
import ProductListPriceMenu from './ProductListPriceMenu'
import Description from './Description'
import Introduce from './Introduce'
import { useLocation } from 'react-router-dom'
import {laptopFinder} from '../laptop';
import {tvFinder} from '../tv';
import {phoneFinder} from '../Phone';

function ProductListLi() {
    // const {productId} = useParams();
    const {pathname} = useLocation();
    
    const catlistarray = pathname.split('/');
    console.log(catlistarray[catlistarray.length-1]);
    
    let dataObject = null;

    if(catlistarray[catlistarray.length-2] == "laptops") {
        dataObject = laptopFinder(catlistarray[catlistarray.length-1])
    } else if(catlistarray[catlistarray.length-2] == "tvs") {
        dataObject = tvFinder(catlistarray[catlistarray.length-1]);
    } else if(catlistarray[catlistarray.length-2] == "phones") {
        dataObject = phoneFinder(catlistarray[catlistarray.length-1]);
    }

    const [Time, setTime] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000);
    }, [])


    var string = Time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    var stringWithoutAMPM = string.replace(/AM|PM/g, "").trim();



    return (
        <Fragment>
            <section className='section-product-li d-flex flex-nowarp   justify-content-between '>
                <div className='d-flex  '>
                    <h2 className=' border  text-danger bold fs-4'>پیشنهاد‌شگفت‌انگیز</h2>

                    <div className='product-clock d-flex  text-danger fs-4 bold '>
                        {stringWithoutAMPM}
                    </div>
                </div>
                <div className='prdocut-brand d-flex flex-column  '>
                    <h6 className='h6 d-flex-sm-nowarp '>{dataObject[0].title}</h6>
                </div>
            </section>

            <section className='mobile-view d-flex flex-row justify-content-between mt-5 mb-5'>
                <div className=' mobile-icons d-flex flex-column section-icons '>
                    <span className='d-flex flex-column fs-3 mb-2'><i className="mobile-icons bi bi-bookmark-fill section-icons"></i></span>
                    <span className='d-flex flex-column fs-3 mb-2'><i className=" mobile-icons bi bi-handbag-fill section-icons"></i></span>
                    <span className='d-flex flex-column fs-3 mb-2'><i className="mobile-icons bi bi-heart-fill section-icons"></i></span>
                    <span className='d-felx flex-column fs-3 mb-2'><i className="mobile-icons bi bi-share-fill section-icons"></i></span>
                </div>
                <SliderProductListli img={dataObject[0].thumbnail} gallery={dataObject[0].images} className='section-row' />
                <ProductListDescreption rating={dataObject[0].rating}/>
                <ProductListPriceMenu price={dataObject[0].price}/>
            </section>
            <Introduce />
            <Description/>
        </Fragment>

    )
}

export default ProductListLi
