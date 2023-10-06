import { Outlet, Link, useParams,useLocation } from "react-router-dom";


function ProductListItem({thumbnail,price,rating,title,url,id}) {
    const {pathname} = useLocation();
    const catlistarray = pathname.split('/');
    console.log(catlistarray[2])




  return (

    
    <div className='d-flex flex-column col-12 col-md-6 col-lg-4 p-2 product-list-item'>
        <div className='mb-2'>
            {/* <img  alt="" /> */}
        </div>

        <div className='d-flex justify-content-center product-item-top position-relative'>
            <div className='product-item-circle-container mt-3 position-absolute'>
                <div className='mb-1 product-item-circle bg-primary rounded-circle'></div>
                <div className='product-item-circle bg-danger rounded-circle'></div>
            </div>
            <div className='product-item-img-container'>
                <img className='img-fluid' src={thumbnail} alt="" />
            </div>
        </div>

        <div className=''>
            <div>
                <div className='d-flex mt-2 justify-content-between product-item-cargo'>
                    <img className="img-fluid" src="./images/productlist/icon/cargo.png" alt="" />
                    <span>ارسال رایگان</span>
                </div>
            </div>
            <div>   
                    <Link className="link-style"to={`/list/${catlistarray[2]}/${url}`}>
                        <h3 className='mt-2 product-items-header-detail'>{title}</h3>
                    </Link>
            </div>
            <div className='d-flex justify-content-between'>
                <div>
                    <img className="ms-2" src="./images/productlist/icon/delivery.svg" alt="" />
                    <span>
                        ارسال امروز
                    </span>
                </div>

                <div>
                    <span>
                        {rating}
                    </span>
                    <img className="me-2" src="./images/productlist/icon/star.svg" alt="" />
                </div>

            </div>

            <div className='mt-2'>
                <div className='d-flex justify-content-between'>
                    <div className='bg-danger rounded-3 text-light px-1'>
                        20%
                    </div>
                    <div className='d-flex'>
                        <div className=''>
                        {price}
                        </div>
                        <img className="me-1 product-item-toman" src="/images/productlist/icon/toman.svg" alt="" />
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-end product-item-discount-price text-decoration-line-through '>
                1,450,000
            </div>
        </div>
    </div>


  
  )
}

export default ProductListItem