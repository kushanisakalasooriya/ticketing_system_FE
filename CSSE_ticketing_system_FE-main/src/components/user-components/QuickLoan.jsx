import React, { useState } from 'react';
import Swal from "sweetalert2";
import axios from 'axios';

function QuickLoan() {

    const [id, setId] = useState('635bd6e436b91a241f0b4078')
    const [loan, setLoan] = useState(500);
    const [loanStatus, setLoanStatus] = useState(false);
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const getLoan = (e) => {
        e.preventDefault();
        const loans = {
            id: id,
            loanAmount: 500,
            loanDate: date
        }

        const balance = {
            id: id,
            rechargeAmount: loan
        }

        axios.post('http://localhost:5050/loan/add', loans)
            .then(res => { 
                Swal.fire({
                    title: 'Success!'
                }).then((result) => {
                    if (result.isConfirmed) {
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

            <h2 style={{ textAlign: 'center' }}> Get a loan  </h2>
            <div style={{
                backgroundColor: 'rgba(214, 25, 192, 0.792)',
                borderRadius: '15px',
                textAlign: 'center',
                paddingTop: '10px',
                paddingBottom: '10px',
                marginTop: '20px',
                marginBottom: '20px',
            }}>

                <h1 style={{ color: 'white', fontWeight: 'bold' }}>
                    Rs.{loan}/=
                </h1>
                {/* <h3 style={{ fontWeight: 'bold', color: '#471163' }}> Date : ? </h3> */}
            </div>

            <center>
                <form onSubmit={getLoan}>
                { loanStatus ? <input disabled
                    type='submit'
                    className='btn btn-lg'
                    value='Get a Quick Loan'
                    style={{
                        backgroundColor: 'rgba(0, 254, 8, 0.852)',
                        borderRadius: '15px',
                        marginBottom: '20px',
                        width:'300px',
                    }} /> :
                    <input
                    type='submit'
                    className='btn btn-lg'
                    value='Get a Quick Loan'
                    style={{
                        backgroundColor: 'rgba(0, 254, 8, 0.852)',
                        borderRadius: '15px',
                        marginBottom: '20px',
                        width:'300px'
                    }} />}
                </form>
                <button
                    className='btn btn-lg'
                    style={{
                        backgroundColor: 'rgba(0, 254, 8, 0.852)',
                        borderRadius: '15px',
                        marginBottom: '20px',
                        width:'300px'
                    }}> Settle Loan </button>
            </center>
            {loanStatus ? <h5 style={{color:'red'}}> 
                You have previous loans that not settled yet, please settle them before you get a new loan.
                </h5> : null}

        </div>
    )
}

export default QuickLoan
