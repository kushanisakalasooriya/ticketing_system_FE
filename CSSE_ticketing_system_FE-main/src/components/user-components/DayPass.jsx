import React from 'react';
import { useState, useEffect } from 'react';
import CountdownTimer from './countDownTimer/CountDownTimer';
import Swal from "sweetalert2";
import axios from 'axios';

function DayPass() {

    const [id, setId] = useState('635bd6e436b91a241f0b4078')
    const [dailyPass, setDailyPass] = useState();
    const [balance, setBalance] = useState('');
    let pass = 2500.00;

    const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
    const dateTimeAfterOneDay = NOW_IN_MS + ONE_DAY_IN_MS;

    const getItems = async () => {
        try {
            const response = await axios.get('http://localhost:5050/wallet/');
            setDailyPass(response.data[0].dayPass);
        } catch (err) {
        }
    }

    const getWallet = async () => {
        try {
            const response = await axios.post('http://localhost:5050/wallet/findwallet/' + id);
            setBalance(response.data[0].accountBalance);
        } catch (err) {
        }
    }

    let temp1 = true;
    if (dailyPass < 1667898599999)
        temp1 = false;
    else
        temp1 = true;


    const handleSubmit = (e) => {
        e.preventDefault();
        const daypass = {
            id: id,
            dayPass: dateTimeAfterOneDay
        }

        if (balance < pass) {
            Swal.fire({
                title: 'Insufficient Balance!',
                icon: 'warning'
            }).then((result) => {
                if (result.isConfirmed) {
                }
            })
        } else {
            axios.post('http://localhost:5050/wallet/updatedaypass', daypass)
                .then(res => {
                    Swal.fire({
                        title: 'Successfully Updated!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location = '/userHome';
                        }
                    })
                });
        }
    }

    useEffect(() => {
        getItems();
        getWallet();
    }, [])

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

            <div style={{
                backgroundColor: 'rgba(189, 164, 133, 0.114)',
                borderRadius: '15px',
                textAlign: 'center',
                paddingTop: '10px',
                paddingBottom: '10px',
                marginTop: '20px',
                marginBottom: '20px',
            }}>

                <h1 style={{ color: '#0c8546', fontWeight: 'bold' }}>
                    Rs.{pass}/=
                </h1>
                <h2 style={{ fontWeight: 'bold' }}> 24 Hours Travel </h2>
            </div>

            <center>
                <form onSubmit={handleSubmit}>

                    <input
                        disabled={temp1}
                        type='submit'
                        className='btn btn-lg'
                        value="Get Day Pass"
                        style={{
                            backgroundColor: 'rgba(0, 254, 8, 0.852)',
                            borderRadius: '15px',
                            marginBottom: '20px',
                        }} />
                    {temp1 ? <h5 style={{ color: 'red' }}>
                        Wait until the current day pass expires to activate a new one</h5> : null}
                </form>
                <h5 style={{ fontWeight: 'bold' }}> Time Remaining    : </h5>
            </center>

            <CountdownTimer targetDate={dailyPass} />

        </div>
    )
}

export default DayPass
