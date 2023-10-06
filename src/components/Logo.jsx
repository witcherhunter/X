import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Logo() {
    return (

        <Container className='d-none d-lg-flex Logo-color flex-row   mt-4 justify-content-between align-items-center'>

            <div className='d-flex align-items-center gap-3 logo-div2 justify-content-end'>
                <img className='logo-size' src='/images/oder/digikala.svg'/>
                <h2 className='text-light fs-3 '  >دانلوداپلیکیشن‌از‌دیجی‌کالا</h2>
            </div>
            <div className=' d-flex justify-content-start gap-2 ' >
                <Button className='Logo-div flex-start bg-light w-30 text-dark  '><img src='/images/oder/bazar.svg' /></Button>
                <Button className='Logo-div variant=secondary flex-end bg-light w-30 text-dark '><img src='/images/oder/myket.svg'></img></Button>
                <Button className='Logo-div variant=secondary flex-start bg-light w-30 text-dark '><img src='/images/oder/dot.svg'></img></Button>
            </div>

        </Container>




    )
}

export default Logo
