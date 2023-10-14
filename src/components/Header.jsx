import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header({ onChange }) {
  return (
    <Navbar expand="Navbarlg" className="digi-navbarbg-body-tertiary">
      <Container className="top-header">
        <div className='d-flex'>

          <Navbar.Brand className='fs-3 text-danger d-none d-lg-block ms-3' href="#">Digikala</Navbar.Brand>
          <Nav
            className="my-lg-0"
            style={{ maxHeight: '60px' }}
          >
          </Nav>
          <Form className='d-flex'>
            <div class='input-group'>
              <div class='d-flex align-items-center justify-content-center input-group-text rounded-start-0 rounded-end border-start-0'>
                <i class="bi bi-search ms-2"></i>
                <span className='text-secondary ms-md-2'>جست جو در </span>
                <span className='d-none d-md-block d-sm-block d-lg-none fs-2 text-danger'>Digikala</span>
              </div>

              <Form.Control
                type='search'
                className='border-end-0 rounded-start rounded-end-0 '
                aria-label='Search'
                onChange={onChange}
              />
            </div>
          </Form>
        </div>

        <div className="d-none d-lg-flex">
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
          <div className='d-flex align-items-center'>
            <span className='vertical-line height-hundred border border-1 mx-2'>

            </span>
          </div>
          <Button className='bg-light' variant="secondary"><i className="text-dark bi bi-basket3-fill"></i></Button>
        </div>
      </Container>
      {/* <ButtonGroup className='' aria-label="Basic example"> */}
      {/* </ButtonGroup> */}
    </Navbar>
  );
}

export default Header;