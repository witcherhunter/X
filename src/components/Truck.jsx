import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';



function truck() {
    return (
        <CardGroup>
            <Card className='inside-truck d-flex flex-row justify-content-between align-items-center  '>
                <Card.Img variant="top" src="/images/oder/truck.svg" style={{ width: '7rem', height: '7rem' }} />
                <Card.Body>
                    <Card.Title>ارسال رایگان برای این کالا</Card.Title>

                </Card.Body>
            </Card>
        </CardGroup>
    )
}

export default truck
