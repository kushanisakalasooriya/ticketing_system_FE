import React from 'react';
import UserNav from '../navbars/UserNav';
import { Container, Row, Col } from 'react-grid-system';
import { useState } from 'react';
import MyAccount from './MyAccount';
import MyBalance from './MyBalance';
import TopUpAccount from './TopUpAccount';
import DayPass from './DayPass';
import QuickLoan from './QuickLoan';
import '../css/userHome.css';

function UserHome() {

    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [color1, setColor1] = useState('rgba(0, 254, 8, 0.852)');
    const [color2, setColor2] = useState('');
    const [color3, setColor3] = useState('');
    const [color4, setColor4] = useState('');
    const [color5, setColor5] = useState('');
    const [color6] = useState('');

    const setView = (n) => {
        if (n === 1){
            setShow1(true);
            setShow2(false);
            setShow3(false);
            setShow4(false);
            setShow5(false);
            setColor1('rgba(0, 254, 8, 0.852)');
            setColor2();
            setColor3('');
            setColor4('');
            setColor5('');
        } else if (n === 2){
            setShow1(false);
            setShow2(true);
            setShow3(false);
            setShow4(false);
            setShow5(false);
            setColor1('');
            setColor2('rgba(0, 254, 8, 0.852)');
            setColor3('');
            setColor4('');
            setColor5('');
        } else if (n === 3){
            setShow1(false);
            setShow2(false);
            setShow3(true);
            setShow4(false);
            setShow5(false);
            setColor1('');
            setColor2('');
            setColor3('rgba(0, 254, 8, 0.852)');
            setColor4('');
            setColor5('');
        } else if (n === 4){
            setShow1(false);
            setShow2(false);
            setShow3(false);
            setShow4(true);
            setShow5(false);
            setColor1('');
            setColor2('');
            setColor3('');
            setColor4('rgba(0, 254, 8, 0.852)');
            setColor5('');
        } else if( n=== 5) {
            setShow1(false);
            setShow2(false);
            setShow3(false);
            setShow4(false);
            setShow5(true);
            setColor1('');
            setColor2('');
            setColor3('');
            setColor4('');
            setColor5('rgba(0, 254, 8, 0.852)');
        }
    }

    return (
        <div>
            <div>
                <UserNav />
            </div>
            <div style={{ paddingTop: "150px" }}>
                <Container>
                    <Row>
                        <Col lg={3}>
                            <Row>
                                <button style={{backgroundColor:color1}} className='btns btn' onClick={() => setView(1)}> My Account </button>
                            </Row>
                            <Row>
                                <button style={{backgroundColor:color2}} className='btns btn' onClick={() => setView(2)}> My Balance </button>
                            </Row>
                            <Row>
                                <button style={{backgroundColor:color3}} className='btns btn' onClick={() => setView(3)}> Top Up Account </button>
                            </Row>
                            <Row>
                                <button style={{backgroundColor:color4}} className='btns btn' onClick={() => setView(4)}> Get a Day Pass </button>
                            </Row>
                            <Row>
                                <button style={{backgroundColor:color5}} className='btns btn' onClick={() => setView(5)}> Quick Loan </button>
                            </Row>
                            <Row>
                                <button style={{backgroundColor:color6}} className='btns btn' onClick={() => setView(6)}> Travel History </button>
                            </Row>
                            
                        </Col>
                        <Col>
                        <div>
                            {show1 ? <MyAccount/> : null}
                            {show2 ? <MyBalance/> : null}
                            {show3 ? <TopUpAccount/> : null}
                            {show4 ? <DayPass/> : null}
                            {show5 ? <QuickLoan/> : null}
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default UserHome
