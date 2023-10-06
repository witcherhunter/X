import React from 'react'
import { Card,Button } from 'react-bootstrap'

function ProductListPriceMenu({price}) {
    return (
        <div className='mobile-product-list-price-menu'>
        <Card className='mobile-product-list-price-menu-10' style={{ width: '25rem', backgroundColor: '#f0f0f1' }}>
            <Card.Body>
                <div className='d-flex flex-row justify-content-between'>
                    <Card.Title className='pt-3 '>فروشنده</Card.Title>
                    <Card.Title className='product-price pt-3 pb-4'>2فروشنده</Card.Title>
                </div>
                <div className='border-bottom pt-3 pb-4'>
                    <Card.Text className='d-flex flex-row align-items-center fs-5'><img className='price-text' src='/images/oder/homelogo.svg'></img>  کالا پلاس </Card.Text>
                </div>
                <div className='line-hight border-bottom pb-4 pt-3'>
                    <Card.Title className='fs-6 padding'><img src='/images/oder/shildlogo.svg'></img>گارانتی ۱۸ ماهه دیجی کالا سرویس+ بیمه ۱۲ ماهه تجهیزات الکترونیک دیجی پی </Card.Title>
                </div>
                <div className='line-hight border-bottom pb-3 pt-3'>
                    <Card.Title className='fs-6 d-flex flex-row '><img src='/images/oder/memory.svg'></img> <img className='flex order-1 ' src='/images/oder/rightselector.svg'></img>موجود در انبار دیجی‌کالا</Card.Title>
                    <Card.Title className='sontsize '><img src='/images/oder/smalltruck.svg'></img> وجود در انبار دیجی‌کالا</Card.Title>
                </div>
                <div>
                    <Card.Title className='fs-6 pb-3 pt-4 border-bottom '><img src='/images/oder/digiclub.svg' ></img>۱۵۰ امتیاز دیجی‌کلاب</Card.Title>
                </div>
                <div className='pt-4'>
                    <Card.Link className='text-green '><img src='/images/oder/!.svg'></img>بهترین قیمت در 30 روز گذشته</Card.Link>
                </div>
                <div className='d-felx flex-row pt-5 '>
                    <Card.Title className='price '>{price}<img className='price2' src='/images/oder/toman.svg'></img></Card.Title>
                </div>
                <div className="d-grid gap-2 pt-3 mobile-product-list-price-menu ">
                    <Button variant="danger" size="lg">
                       افزودن به سبد خرید
                    </Button>
                </div>
            </Card.Body>
        </Card>
        </div>
    )
}

export default ProductListPriceMenu
