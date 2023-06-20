import React, { useEffect, useState } from 'react'
import axios from "axios";

function MyBalance() {

    const [_id, set_id] = useState('635bd6e436b91a241f0b4078')
    const [balance, setBalance] = useState('');
    const [dailyPass, setDailyPass] = useState();
    const [loan, setLoanAmount] = useState('');

    const getWallet = async () => {
        try {
            const response = await axios.post('http://localhost:5050/wallet/findwallet/' + _id);
            setBalance(response.data[0].accountBalance);
            setDailyPass(response.data[0].dayPass);
            setLoanAmount(response.data[0].loanAmount);
            let temp1;
            if (dailyPass < 1667898599999)
                temp1 = true;
            else
                temp1 = false;
        } catch (err) {
        }
    }

    useEffect(() => {
        getWallet();
    }, [])

    return (
        <div
            style={{
                border: 'solid 2px',
                borderRadius: '20px',
                backgroundColor: 'white',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '50px',
                paddingRight: '50px',
                minHeight: '445px'
            }}>
            <h2 style={{ textAlign: 'center' }}> My Balance</h2>
            <hr></hr>

            <h5 style={{ color: 'darkBlue' }}> Account Balance</h5>
            <h3 style={{ color: 'darkBlue', fontWeight: 'bold', marginBottom: '20px' }}> Rs.{balance} </h3>

            <h5 style={{ color: '#128a76' }}> Day Pass Status</h5>
            {dailyPass ? <h3 style={{ color: '#128a76', fontWeight: 'bold', marginBottom: '20px' }}> Active</h3> :
                <h3 style={{ color: '#128a76', fontWeight: 'bold', marginBottom: '20px' }}> Inactive</h3>}

            <h5 style={{ color: 'red' }}> Fine amounts</h5>
            <h3 style={{ color: 'red', fontWeight: 'bold', marginBottom: '20px' }}> Rs.{loan} </h3>

        </div>
    )
}

export default MyBalance
