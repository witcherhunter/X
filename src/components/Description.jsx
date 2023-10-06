import React, {useState} from 'react'
import { BiChevronLeft } from 'react-icons/bi';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const data = [
    {
        title: 'ابعاد',
        description: '۸.۲×۷۸.۱×۱۶۱.۳',
    },
    {
        title: 'توضیحات کارت حافظه جانبی',
        description: 'شیار مشترک با سیم کارت',
    },
    {
        title: 'وزن',
        description: '199 گرم',
    },
    {
        title: 'فناوری صفحه نمایش',
        description: 'Super AMOLED',
    },
    {
        title: 'بازه ی اندازه صفحه نمایش',
        description: '6.0 اینج و بزرگ تر',
    },
    {
        title: 'توضیحات سیم کارت',
        description: 'سایز نانو',
    },
    {
        title: 'ساختار بدنه',
        description: 'قاب جلو از جنس شیشه / قاب پشت و فریم از چنس پلاستیک',
    },
    {
        title: 'تراکم پیکسلی',
        description: '۳۹۰ پیکسل بر اینچ',
    },
    {
        title: 'تعداد سیم کارت',
        description: 'دو عدد',
    },
];

function Description() {

  const [show, setShow] = useState(false);
  const [showMobile, setShowMobile] = useState(false);
  const [limiter, setLimiter] = useState(3);
  const [limiterMobile, setLimiterMobile] = useState(3);

  const elementsMobile = data.slice(0,limiterMobile).map(obj => {
    return (
        <div className='description-table-row gap-4'>
            <div className='td-one d-flex'>
                {obj.title}    
            </div>
            <div className='td-two'>
                {obj.description}
            </div>
        </div>
    );
  })

  const elements = data.slice(0,limiter).map(obj => {
    return (
        <div className='description-table-row gap-4'>
            <div className='td-one d-flex'>
                {obj.title}    
            </div>
            <div className='td-two'>
                {obj.description}
            </div>
        </div>
    );
  })

  const fullElements = data.length;

  const clickHandlerMobile = ()=> {
    setLimiterMobile(oldLimiter => {
          if(oldLimiter === 3){
              return fullElements;
            }else if(oldLimiter === fullElements) {
                return 3;
            }
        });
        setShowMobile(old => !old)
    }

    const clickHandler = ()=> {
        setLimiter(oldLimiter => {
            if(oldLimiter === 3){
                return fullElements;
              }else if(oldLimiter === fullElements) {
                  return 3;
              }
          });
          setShow(old => !old)
      }


  const limiterButton = limiter === 3 ? 'بیشتر' : 'بستن';

  return (
    <div>
        <section className='mt-4 container'>
            <span className='fs-4 border-bottom border-2 border-danger pb-2 fw-semibold'>مشخصات</span>
            <div className='my-4'></div>
            <div className='product-description-table-container'>
                <div className='d-none d-lg-block product-description-table-right'>
                    مشخصات
                </div>

                <div className='product-description-table-left'>
                    <div className=''>
                        <div className='the-fucking-table'>
                            {elements}
                        </div>
                    </div>
                </div>
            </div>


            <div className='d-lg-none introduce-limiter-button mt-3' onClick={clickHandlerMobile}>
                بیشتر
                 <BiChevronLeft />
            </div>

            <div className='d-none d-lg-block introduce-limiter-button mt-3' onClick={clickHandler}>
                 {
                    limiterButton
                 }
                 <BiChevronLeft />
            </div>

           <div>
           {/* <Button variant="primary" onClick={handleShow}>
                Launch
            </Button> */}

            <Offcanvas show={showMobile} onHide={clickHandlerMobile} placement="bottom" className="d-lg-none description-offcanvas">
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>مشخصات</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='d-lg-none description-offcanvas-body'>
                    <div className='d-lg-none product-description-table-left'>
                        <div className=''>
                            <div className='the-fucking-table'>
                                {elementsMobile}
                            </div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
           </div>
            
            
        </section>
    </div>
  )
}

export default Description