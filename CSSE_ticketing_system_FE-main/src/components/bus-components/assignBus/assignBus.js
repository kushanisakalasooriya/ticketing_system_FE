import { useState } from "react";
import axios from 'axios';
import { Col, Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import './style.css';
import AdminSidebar1 from "../adminDashboard/sideBar";
const AssignBus = () => {


    const currentDate = new Date();
    const today = (currentDate.getFullYear() + '-' + ((currentDate.getMonth() > 8) ? (currentDate.getMonth() + 1) : ('0' + (currentDate.getMonth() + 1))) + '-' + ((currentDate.getDate() > 9) ? currentDate.getDate() : ('0' + currentDate.getDate())));


    const [data, setData] = useState({
        busDate: "",
        busNo: "",
        startLocation: "",
        arriveLocation: "",
        startingTime: "",
        arriveTime: "",
        driverName: "",
        driverContact: "",
        inspectorName: "",
        inspectorContact: "",
        seat: "32",
        totalAmount: "0",
        noOfPassengers: "0"
    });

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {


            const url = "http://localhost:5050/bus/add";
            const { data: res } = await axios.post(url, data);

            Swal.fire({
                title: "Success!",
                text: res,
                icon: "success",
                showConfirmButton: false,
            })

            setTimeout(() => {
                window.location = "/bus-time-table"
            }, 2000)




        }
        catch (error) {

            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                alert(error.response.data.message)
            }
        }
    }

    return (
        <div >
            <AdminSidebar1 />
            <div className="assignContainer" style={{
                border: 'solid 2px',
                borderRadius: '20px',
                backgroundColor: 'white',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '50px',
                paddingRight: '50px',
                minHeight: '445px',
                marginTop: "100px",
                marginBottom: "30px"
            }}>
                <form onSubmit={handleSubmit}>
                    <h2 style={{ marginTop: "10px", marginBottom: "30px", marginLeft: "100px" }}>Travel Details</h2>
                    <div className="">
                        <Container>
                            <Row>
                                <Col>
                                    <label style={{ fontWeight: "bold" }} >Enter Date    :</label>
                                </Col>
                                <Col>
                                    <input
                                        type="date"
                                        name='busDate'
                                        min={today}
                                        onChange={handleChange}
                                        value={data.busDate}
                                        required
                                        className="form-control"
                                    />
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <label style={{ fontWeight: "bold" }}>Bus No    :</label><br></br>
                                </Col>
                                <Col>
                                    <input
                                        type="text"
                                        placeholder='Bus No'
                                        name='busNo'
                                        onChange={handleChange}
                                        value={data.busNo}
                                        required
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <label style={{ fontWeight: "bold" }}>Starting Location    :</label><br></br>
                                </Col>
                                <Col >
                                    <input
                                        type="text"
                                        placeholder='Starting Location'
                                        name='startLocation'
                                        onChange={handleChange}
                                        value={data.startLocation}
                                        required
                                        className="form-control"
                                    />
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <label style={{ fontWeight: "bold" }}>Arrive Location    :</label><br></br>
                                </Col>
                                <Col >
                                    <input
                                        type="text"
                                        placeholder='Arrive Location'
                                        name='arriveLocation'
                                        onChange={handleChange}
                                        value={data.arriveLocation}
                                        required
                                        className="form-control"
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <label style={{ fontWeight: "bold" }}>Starting Time    :</label><br></br>
                                </Col>
                                <Col >
                                    <input
                                        type="time"
                                        name='startingTime'
                                        onChange={handleChange}
                                        value={data.startingTime}
                                        required
                                        className="form-control"
                                    />
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <label style={{ fontWeight: "bold" }}>Arrive Time   :</label><br></br>
                                </Col>
                                <Col >
                                    <input
                                        type="time"
                                        name='arriveTime'
                                        onChange={handleChange}
                                        value={data.arriveTime}
                                        required
                                        className="form-control"
                                    />
                                </Col>
                            </Row>

                        </Container>

                        <h3 style={{ marginTop: "50px", marginBottom: "30px", marginLeft: "100px" }}>Driver Details</h3>

                        <Container>
                            <Row>
                                <Col>
                                    <label style={{ fontWeight: "bold" }}>Assign Driver    :</label><br></br>
                                </Col>
                                <Col >
                                    <input
                                        type="text"
                                        pattern="[A-Za-z]{1,50}"
                                        title="Assign Driver length should not exceed 50 characters and not valid any numbers"
                                        placeholder='Assign Driver name'
                                        name='driverName'
                                        onChange={handleChange}
                                        value={data.driverName}
                                        required
                                        className="form-control"
                                    />
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <label style={{ fontWeight: "bold" }}>Driver Contact    :</label><br></br>
                                </Col>
                                <Col >

                                    <input
                                        type="tel"
                                        pattern="[0-9]{10}"
                                        title="Driver Contact length should not exceed 10 numbers and not valid any characters"
                                        placeholder='Driver Contact'
                                        name='driverContact'
                                        onChange={handleChange}
                                        value={data.driverContact}
                                        required
                                        className="form-control"
                                    />
                                </Col>
                            </Row>

                        </Container>

                        <h3 style={{ marginTop: "50px", marginBottom: "30px", marginLeft: "100px" }}>Inspector Details</h3>

                        <Container>
                            <Row>
                                <Col>
                                    <label style={{ fontWeight: "bold" }}>Assign Inspector    :</label><br></br>
                                </Col>
                                <Col >
                                    <input
                                        type="text"
                                        pattern="[A-Za-z]{1,50}"
                                        title="Assign Inspector length should not exceed 50 characters and not valid any numbers"
                                        placeholder='Assign Inspector name'
                                        name='inspectorName'
                                        onChange={handleChange}
                                        value={data.inspectorName}
                                        required
                                        className="form-control"
                                    />
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <label style={{ fontWeight: "bold" }}>Inspector Contact    :</label><br></br>
                                </Col>
                                <Col >

                                    <input
                                        type="tel"
                                        pattern="[0-9]{10}"
                                        title="Inspector Contact length should not exceed 10 numbers and not valid any characters"
                                        placeholder='Driver Contact'
                                        name='inspectorContact'
                                        onChange={handleChange}
                                        value={data.inspectorContact}
                                        required
                                        className="form-control"
                                    />
                                </Col>
                            </Row>


                            <button type='submit' className="reportbtn" style={{ backgroundColor: "rgba(0, 254, 8, 0.852)", borderRadius: "10px", height: "30px", marginLeft: "200px", marginBottom: "50px", marginTop: "35px" }}>Assign Now</button>
                        </Container>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default AssignBus;