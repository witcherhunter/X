import React, {useState}from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Header from '../components/Header'
import NavLinks from '../components/NavLinks'
import ProductListItem from "../components/ProductListItem";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import FiChevronDown from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';




function ProductList({ forward, result, handleClick }) {

    return (
        <div className=''>
            <div className='my-4'></div>
            <div className='container mb-4'>
                <h2 className='fs-6'>فروشگاه اینترنتی دیجی کالا / کالای دیجیتال</h2>
            </div>
            <div className='container header-imager-container mb-4'>
                <h2 className='fs-4 mb-4'>لپتاپ</h2>
                <div className='d-flex header-pictures'>
                    <Link to="/list/laptops">
                        <div className='d-flex flex-column align-items-center text-dark p-3 rounded-3 product-list-category-image'>
                            <img className='img-fluid' src="/images/productlist/images/header/headerlaptop.jpg" alt="" />
                            <span className='mt-2 product-list-header-text'>لپ تاپ و الترابوک</span>
                        </div>
                    </Link>
                    <Link to="/list/phones">
                        <div className='d-flex flex-column align-items-center text-dark p-3 rounded-3 product-list-category-image'>
                            <img className='img-fluid' src="/images/productlist/images/header/phone.jpg" alt="" />
                            <span className='mt-2 product-list-header-text'>موبایل</span>
                        </div>
                    </Link>
                    <Link to="/list/tvs">
                        <div className='d-flex flex-column align-items-center text-dark p-3 rounded-3 product-list-category-image'>
                            <img className='img-fluid' src="/images/productlist/images/header/tv.jpg" alt="" />
                            <span className='mt-2 product-list-header-text'>تلوزیون</span> 
                        </div>
                    </Link>
                </div>
            </div>
            <div className='container'>
                <div className="row product-list-main">
                    <div className="product-list-right-side-body p-3 col-3 d-none d-lg-block height-added border rounded-4">
                        <div className='product-list-right-side-header d-flex align-items-center justify-content-between mb-3'>
                            <span className='fs-4 fw-semibold'>فیلتر ها</span>
                            <span className='fs-6'>حذف فیلتر ها</span>
                        </div>
                        <Form>
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className='productlist-accordion-header'>
                                        <span className='fs-5'>
                                            دسته بندی
                                        </span>

                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul className='product-list-accordion-body-ul'>
                                            <li className='product-list-accordion-body-li border w-100'>
                                                <img src="./images/productlist/icon/chevron-down.svg" alt="" />
                                                <span className='me-2'>همه کالا ها</span>
                                            </li>
                                            <li className='product-list-accordion-body-li border w-100'>
                                                <img src="./images/productlist/icon/chevron-down.svg" alt="" />
                                                <span className='me-2'>کالای دیجیتال</span>
                                            </li>
                                            <li className='d-flex justify-content-between product-list-accordion-body-li border w-100'>
                                                <div>
                                                    <img src="./images/productlist/icon/chevron-down.svg" alt="" />
                                                    <span className='me-2'>لپتاپ</span>
                                                </div>
                                                <div className='d-flex align-items-center justify-content-center product-list-accordion-body-li-selected'>
                                                    <i class="bi bi-check2"></i>
                                                </div>
                                            </li>
                                            <li className='product-list-accordion-body-li border w-100'>
                                                <img src="./images/productlist/icon/chevron-down.svg" alt="" />
                                                <span className='me-2'>کامپیوتر و تجهیزات جانبی</span>
                                            </li>
                                            <li className='product-list-accordion-body-li border w-100'>
                                                <img src="./images/productlist/icon/chevron-down.svg" alt="" />
                                                <span className='me-2'>ماشین های اداری</span>
                                            </li>
                                            <li className='product-list-accordion-body-li border w-100'>
                                                <img src="./images/productlist/icon/chevron-down.svg" alt="" />
                                                <span className='me-2'>دوربین</span>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <span className='fs-5'>
                                            برند
                                        </span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <Form>
                                            <InputGroup className="mb-3 product-list-accordion-search">
                                                <Form.Control
                                                    placeholder="جستجوی برند"
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <Button variant="outline-secondary" id="button-addon2">
                                                    <i class="bi bi-search"></i>
                                                </Button>
                                            </InputGroup>
                                            <Form.Check // prettier-ignore
                                                type="checkbox"
                                                id="custom-switch"
                                                label="ASUS"
                                                className="py-3 product-list-accordion-checkbox"
                                            />
                                            <Form.Check // prettier-ignore
                                                type="checkbox"
                                                id="custom-switch"
                                                label="Lenovo"
                                                className="py-3 product-list-accordion-checkbox"
                                            />
                                            <Form.Check // prettier-ignore
                                                type="checkbox"
                                                id="custom-switch"
                                                label="Apple"
                                                className="py-3 product-list-accordion-checkbox"
                                            />
                                            <Form.Check // prettier-ignore
                                                type="checkbox"
                                                id="custom-switch"
                                                label="MSI"
                                                className="py-3 product-list-accordion-checkbox"
                                            />
                                            <Form.Check // prettier-ignore
                                                type="checkbox"
                                                id="custom-switch"
                                                label="Acer"
                                                className="py-3 product-list-accordion-checkbox"
                                            />
                                        </Form>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <div className='form-check-container'>
                                    <Form.Check // prettier-ignore
                                        type="switch"
                                        id="custom-switch"
                                        label="فقط کاهای موجود"
                                    // className="pe-4"
                                    />
                                </div>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        <span className='fs-5'>
                                            محدوده قیمت
                                        </span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <label for="customRange1" class="form-label">محدوده قیمت</label>
                                        <input type="range" class="form-range" id="customRange1" />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Form>

                    </div>
                    <div className="d-flex col-12 col-lg-9 height-added flex-column">

                        <div className='d-flex align-items-center mb-2 mt-1 border-bottom justify-content-between'>

                            <Navbar expand="lg" className="">
                                <Container>
                                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`}>
                                        <img className="ms-1" src="./images/productlist/icon/filter.svg" alt="" />
                                        <span className='product-list-sorting-text'>مرتب سازی</span>
                                    </Navbar.Toggle>

                                    <Navbar.Offcanvas
                                        id={`offcanvasNavbar-expand-lg`}
                                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                                        placement="bottom"
                                        className="product-list-offcanvas"
                                    >
                                        <Offcanvas.Header closeButton>
                                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                                مرتب سازی محصولات
                                            </Offcanvas.Title>
                                        </Offcanvas.Header>
                                        <Offcanvas.Body className='product-list-offcanvas-body'>
                                            <img className="product-list-filer-icon" src="./images/productlist/icon/filter.svg" alt="" />
                                            <Nav className="justify-content-end flex-grow-1 pe-1">
                                                <button className="product-list-navlink-item my-1" href="related" value="related" onClick={handleClick}>مرتبط ترین</button>
                                                <button className="product-list-navlink-item my-1" href="most-viewed" value="most-viewed" onClick={handleClick}>پربازدید ترین </button>
                                                <button className="product-list-navlink-item my-1" href="cheapest" value="cheapest" onClick={handleClick}>ارزان ترین</button>
                                                <button className="product-list-navlink-item my-1" href="expensive" value="expensive" onClick={handleClick}>گران ترین</button>
                                               {
                                                console.table()
                                               }
                                            </Nav>
                                        </Offcanvas.Body>
                                    </Navbar.Offcanvas>
                                </Container>
                            </Navbar>


                            <span className='product-list-counter'>
                                136،620 کالا
                            </span>
                        </div>
                        <div className='d-flex flex-wrap' >

                            <ProductListItem  />

                            {forward}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList