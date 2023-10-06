import React from 'react'
import {inStoryDB} from "../db/dummyDb";
import {Link} from "react-router-dom";

function InStory() {

    const elements = inStoryDB.slice(0,5).map(obj=> {
        return (
            <div className='d-flex flex-column align-items-center in-story-element'>
                <img className='img-fluid border border-danger border-2 rounded-circle' src={obj.img} alt="" />
                <span className='fs-6'>{obj.title}</span>
            </div>
        )
    })
  return (
    <div className='mt-4 in-story-container d-none d-md-none d-lg-flex container justify-content-between'>
        <Link to="/list/laptops">
            <div className='d-flex flex-column align-items-center in-story-element'>
                <img className='img-fluid border border-primary border-2 rounded-circle' src="/images/productlist/images/header/headerlaptop.jpg" alt="" />
                <span className='fs-6'>لپتاپ</span>
            </div>
        </Link>
        
        <Link to="/list/tvs">
            <div className='d-flex flex-column align-items-center in-story-element'>
                    <img className='img-fluid border border-primary border-2 rounded-circle' src="/images/productlist/images/header/tv.jpg" alt="" />
                    <span className='fs-6'>تلویزیون</span>
            </div>
        </Link>
        {elements}
    </div>
  )
}

export default InStory