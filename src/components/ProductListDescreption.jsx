import React, { Fragment, useState } from 'react'
import Truck from './Truck';
import Card from 'react-bootstrap/Card';
import { FaExclamationCircle } from 'react-icons/fa'

function ProductListDescreption({rating}) {
    const [color, setColor] = useState("قرمز");
    const radioClickHandler = (event) => {
        setColor(event.target.value);
    }


    return (
        <Fragment>
            <div className='d-flex flex-row '>
                <Card style={{ width: '30rem', border:"none"}}>
                    <Card.Body className='mb-5 '>
                        <div className='d-flex flex-row p-1  '>
                            <Card.Title className='d-flex flex-row align-items-center pr-1 text-dark' ><img src='./images/oder/goldenstar.png' style={{ width: "1rem ", height: '1rem' }} alt=''></img>{rating}<span className='test-gray fs-6'>(569)</span></Card.Title>
                            <Card.Title className='card-title-2'>دیدگاه7</Card.Title>
                        </div>
                        <Card.Subtitle className="mb-2 text-muted fs-4">رنگ {color}</Card.Subtitle>
                        <div className='mb-3'><span className='d-flex flex-row align-itmes-center'><img src='/images/oder/greenlike.svg'></img>۷۶% (۳۲۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند</span>
                        </div>
                        {/* سکشن انتخاب رنگ */}
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="قرمز" onClick={radioClickHandler}/>
                                <label className="form-check-label" for="flexRadioDefault1">
                                    <span className='form__radio-button-1'></span>
                                </label>
                        </div>
                        <div className="form-check form-check-inline position-relative ">
                            <input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="آبی" onClick={radioClickHandler} />
                            <label className="form-check-label" for="flexRadioDefault2">
                                    <span className="form__radio-button-2"></span>
                            </label>
                        </div>
                        {/* بعدا باس این رنگ رو بیایم داینمایک کنیم به انتخاب کاربر */}
                        <div className='d-flex flex-row align-items-center  pr-1'>
                            <Card.Text className=' text-muted pl-1 fs-4'><li>فناوری صفحه نمایش :</li></Card.Text>
                            <Card.Text className='fs-5 pb-3'>ips</Card.Text>
                        </div>
                        <div className='d-flex flex-row pr-1 '>
                            <Card.Text className=' text-muted pl-1 fs-4 '><li>اندازه:</li> </Card.Text>
                            <Card.Text className='fs-5 pt-1'>50 مگاپیکسل</Card.Text>
                        </div>
                        <div className='d-flex flex-row pr-1'>
                            <Card.Text className=' text-muted pl-1 fs-4'><li>رزولوشن عکس</li></Card.Text>
                            <Card.Text className='fs-5 pt-1'>6.5</Card.Text>
                        </div>
                        <div className='d-flex flex-row pr-1'>
                            <Card.Text className=' text-muted pl-1 fs-4 '> <li>نسخه سیستم عامل</li></Card.Text>
                            <Card.Text className='fs-5 pt-1'>اندروید 11</Card.Text>
                        </div>
                        <Card.Text > <FaExclamationCircle style={{ color: 'gray' }} />امکان برگشت کالا در گروه موبایل با دلیل "انصراف از خرید" تنها در صورتی مورد قبول است که پلمب کالا باز نشده باشد. تمام گوشی‌های دیجی‌کالا ضمانت رجیستری دارند. در صورت وجود مشکل رجیستری، می‌توانید بعد از مهلت قانونی ۳۰ روزه، گوشی خریداری‌شده را مرجوع کنید.
                        </Card.Text>
                    </Card.Body>
                    {/* Component of Truck  */}
                    <Truck/>
                </Card>

                {/*این قسمت رو باید بیام بعدا تو یه کامپوننت جدا بنویسم بعدا بعدا ادد کنم تویه پروداکت لیست */}
            
            </div>

        </Fragment>
    )
}

export default ProductListDescreption
