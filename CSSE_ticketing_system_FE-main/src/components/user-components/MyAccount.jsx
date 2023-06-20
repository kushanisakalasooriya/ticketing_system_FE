import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from "axios";
import '../css/myAcc.css'

function MyAccount() {

    const [_id] = useState('635bd6e436b91a241f0b4078')
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');
    const [contact, setContact] = useState('');

    const getItems = async () => {
        try {
            const response = await axios.get('http://localhost:5050/passenger/' + _id);
            setName(response.data.name);
            setEmail(response.data.email);
            setId(response.data.idNumber);
            setContact(response.data.contactNo);
        } catch (err) {
        }
    }

    useEffect(() => {
        getItems();
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
            <h2 style={{ textAlign: 'center' }}> My Account</h2>
            <hr></hr>

            <table>
                <tbody>
                    <tr >
                        <td className='tblth'>
                            <h4 style={{ color: 'darkBlue' }}> Name</h4>
                        </td>
                        <td> : </td>
                        <td className='tblth'
                        >
                            <h4 style={{ color: 'darkBlue', fontWeight: 'bold' }}> {name} </h4>
                        </td>
                    </tr>
                    <tr>
                        <td className='tblth'>
                            <h4 style={{ color: '#128a76' }}> Email</h4>
                        </td>
                        <td> : </td>
                        <td className='tblth'>
                            <h4 style={{ color: '#128a76', fontWeight: 'bold' }}> {email} </h4>
                        </td>
                    </tr>
                    <tr>
                        <td className='tblth'>
                            <h4 style={{ color: 'grey' }}> ID</h4>
                        </td>
                        <td> : </td>
                        <td className='tblth'>
                            <h4 style={{ color: 'grey', fontWeight: 'bold' }}> {id} </h4>
                        </td>
                    </tr>
                    <tr>
                        <td className='tblth'>
                            <h4 style={{ color: 'grey' }}> Contact No</h4>
                        </td>
                        <td> : </td>
                        <td className='tblth'>
                            <h4 style={{ color: 'grey', fontWeight: 'bold' }}> {contact} </h4>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default MyAccount
