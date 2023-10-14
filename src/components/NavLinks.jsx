import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiOutlineFire } from 'react-icons/ai';
import {  Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function NavLinks() {
  return (

    // <Routes>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <NavDropdown title="دسته بندی کالاها" id="basic-nav-dropdown">
              
              <Link to={"/login"}>
                <Button className='bg-light d-flex align-items-center' variant="secondary">
                  <span className='d-flex align-items-center eighth-rem text-dark'>
                    <i className="bi bi-box-arrow-left ms-1"></i>
                    <span className="add-line-height">
                      ورود | ثبت نام
                    </span>
                  </span>
                </Button>
              </Link>

              <NavDropdown.Item href="/list/laptops">
                لپتاپ
              </NavDropdown.Item>
              <NavDropdown.Item href="/list/tvs">تلوزیون</NavDropdown.Item>
              <NavDropdown.Item href="/list/phones">موبایل</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>


            <div className="border-start border-2"></div>
            <Nav.Link href="#home"> <i className="bi bi-percent ms-1"></i>شگفت انگیز ها</Nav.Link>
            <Nav.Link href="#link"><i className="bi bi-basket2 ms-1"></i>سوپرمارکت</Nav.Link>
            <Nav.Link href="#link"><i className="bi bi-credit-card-fill ms-1"></i>کارت هدیه</Nav.Link>
            <Nav.Link href="#link"><AiOutlineFire className="ms-1" />پرفروش ترین ها</Nav.Link>
            <Nav.Link href="#link"><i className="bi bi-tag ms-1"></i>تخفیف ها و پیشنهاد ها</Nav.Link>
            <div className="border-start border-2"></div>
            <Nav.Link href="#link">سوالی دارید؟</Nav.Link>
            <Nav.Link href="#link">در دیجی کالا بفروشید</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <div className="d-flex-fill nav-location">
          <i className="bi bi-geo-alt ms-2"></i>
          <span>لطفا شهر خود را انتخاب کنید</span>
        </div>
      </Container>
    </Navbar>
    // </Routes>

  );
}

export default NavLinks;