import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';

function MainNavbar() {
    return (


        <div className='position-relative'>
            <ul className="nav nav-underline justify-content-end  ">
                {/* DropDown Menu */}
                <div className='order-last '>
                    <NavDropdown className='text-decoration-none ' title="دسته بندی"  id="basic-nav-dropdown">
                      


                        <NavDropdown.Item href="#action/3.1">تلفن هوشمند</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            ایرپاد
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">کنسول بازی</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            هدفون
                        </NavDropdown.Item>
                    </NavDropdown>
                </div>

                {/* Menu */}

                {/* <li className="nav-item order-last">
                    <a className="nav-link  " style={{ color: 'MenuText' }} aria-current="page" href="#">دسته بندی <i class="bi bi-justify"></i></a>
                </li> */}
                <li className="nav-item">
                    <a className="nav-link" style={{ color: 'grey' }} href="#">سوالی‌دارید؟</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" style={{ color: 'grey' }} href="#">دردیجی‌کلا‌‌ بفروشید</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" style={{ color: 'grey' }} href="#">| تخفیف‌ها و پیشنهاد‌ها </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" style={{ color: 'grey' }} href="#">کالا‌های شگفت‌انگیر</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" style={{ color: 'grey' }} href="#">سوپرمارکت</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " style={{ color: 'grey' }} href="#" >کارت‌هدیه</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" style={{ color: 'grey' }} href="#">پرفروش ترین ها</a>
                </li>

            </ul>
        </div>
    )
}

export default MainNavbar
