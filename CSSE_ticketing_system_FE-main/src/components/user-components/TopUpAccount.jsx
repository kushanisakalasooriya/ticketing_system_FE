import { Container, Row, Col } from 'react-grid-system';
import { Form } from "react-bootstrap";
import React, { useState } from 'react';
import Swal from "sweetalert2";
import axios from 'axios';
import '../css/TopUp.css';

function TopUpAccount() {

    const [id, setId] = useState('635bd6e436b91a241f0b4078')
    const [rechargeAmount, setRechargeAmount] = useState();
    const [rechargeDate, setRechargeDate] = useState();

    const rechargeAmountUpdate = (event) => {
        setRechargeAmount(event.target.value)
        setRechargeDate(new Date().getTime());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const recharge = {
            id: id,
            rechargeAmount: rechargeAmount,
            rechargeDate: rechargeDate
        }
        const balance = {
            id: id,
            rechargeAmount: rechargeAmount
        }
        axios.post('http://localhost:5050/recharge/add', recharge)
            .then(res => { 
                Swal.fire({
                    title: 'Successfully Recharged!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location = '/userHome';
                    }
                })
            });

        axios.post('http://localhost:5050/wallet/updatebalance', balance)
    }

    return (
        <div style={{
            border: 'solid 2px',
            borderRadius: '20px',
            backgroundColor: 'white',
            paddingTop: '10px',
            paddingBottom: '10px',
            paddingLeft: '50px',
            paddingRight: '50px',
            minHeight: '445px'
        }}>

            <h3 style={{ 
                color: '#0ead5b',
                marginBottom:'40px'
        }}> Enter Payment Details</h3>
            <Form onSubmit={handleSubmit}>
                <Container>
                    <Row style={{ marginTop: '5px' }}>
                        <Col>
                            <h6> Amount</h6>
                        </Col>
                        <Col>
                            <input className='frm' type='number' 
                            pattern='[0-9]' 
                            min={1}
                            onChange={rechargeAmountUpdate} 
                            placeholder='Enter Amount' 
                            style={{ borderRadius: '6px', width: '100%' }} required/>
                        </Col>
                    </Row>
                    {/* <Row style={{ marginTop: '5px' }}>
                        <Col>
                            <h6> Select Payment Type</h6>
                        </Col>
                        <Col>
                        </Col>
                    </Row> */}
                    <Row style={{ marginTop: '5px' }}>
                        <Col>
                            <h6> Account Holder Name</h6>
                        </Col>
                        <Col>
                            <input 
                            pattern="[A-Za-z]{1,32}" 
                            className='frm' 
                            type="text" 
                            placeholder='Enter name' 
                            style={{ borderRadius: '6px', width: '100%' }} 
                            required/>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '5px' }}>
                        <Col>
                            <h6> Account No</h6>
                        </Col>
                        <Col         
                            <input maxLength={16} pattern="[0-9]{16}"  className='frm' type="text" title='Please enter 16 digits card number' placeholder='XXXX-XXXX-XXXX-XXXX' style={{ borderRadius: '6px', width: '75%' }} required/>
                            <input maxLength={3} pattern="[0-9]{3}"  className='frm' type="text" title='Please enter 3 digits CVC number' placeholder='CVC' style={{ borderRadius: '6px', width: '25%' }} required/>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '5px' }}>
                        <Col>
                            <h6> Card Expiry Date</h6>
                        </Col>
                        <Col>
                            <input className='frm' type="month" placeholder='Month' style={{ borderRadius: '6px', width: '50%' }} required/>
                            <input className='frm' type="year" placeholder='Year' style={{ borderRadius: '6px', width: '50%' }} required/>
                        </Col>
                    </Row>
                    <Row justify='center'>
                        <button type='submit' style={{ backgroundColor: 'rgba(0, 254, 8, 0.852)', borderRadius: '20px', marginTop: '25px' }} className='btn'> Top Up Now</button>
                    </Row>
                </Container>
            </Form>

        </div>
    )
}

export default TopUpAccount
