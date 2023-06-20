import React, { useState } from 'react';
import { useCreditCardValidator } from 'react-creditcard-validator';

export default function PaymentInputs() {

    const [cardNumber, setCardNumber] = useState('')

    const {
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps,
        meta: { erroredInputs }
    } = useCreditCardValidator();

    const priceUpdate = (event) => {
        setCardNumber(event.target.value)
    }

    const submit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input {...getCardNumberProps()} onChange={priceUpdate} />
                <small>{erroredInputs.cardNumber && erroredInputs.cardNumber}</small>

                <input {...getExpiryDateProps()} />
                <small>{erroredInputs.expiryDate && erroredInputs.expiryDate}</small>

                <input {...getCVCProps()} />
                <small>{erroredInputs.cvc && erroredInputs.cvc}</small>

                <input type='submit' />
            </form>
        </div>
    );
}