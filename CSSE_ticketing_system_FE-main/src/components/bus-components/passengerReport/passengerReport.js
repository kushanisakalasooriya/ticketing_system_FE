import AdminSidebar1 from "../adminDashboard/sideBar";
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './dashboard.css';
import 'react-calendar/dist/Calendar.css';
import axios from "axios";
import { Chart } from "react-google-charts";
import "./admin-passenger-report.css"

const PassengerReport = () => {

    const [value, onChange] = useState(new Date());
    const [items, setItems] = useState([]);
    const [BusDate, setBusDate] = useState([]);
    const [PassengersCount, setPassengersCount] = useState();
    const [LocalPassengersCount, setLocalPassengersCount] = useState();

    // local passenger count
    function getLocalPassengersCount() {
        axios.get("http://localhost:5050/passenger").then((res) => {

            setItems(res.data);

            var count2 = 0;
            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].type.split("T")[0] === 'Local') {
                    count2++
                    setLocalPassengersCount(count2);
                }
            }


        })
    }

    // get total passengers
    function getItems() {
        axios.get("http://localhost:5050/passenger").then((res) => {


            setItems(res.data);
            setBusDate(res.data.busDate);

            var count = 0;
            for (let i = 0; i < res.data.length; i++) {
                count++

            }
            setPassengersCount(count);



        })
    }


    useEffect(() => {
        getItems();
        getLocalPassengersCount();
    }, [])


    const data1 = [
        ["TYPE", "NUMBER OF Passengers"],
        ["LOCAL PASSENGERS", LocalPassengersCount],
        ["FOREIGN PASSENGERS", PassengersCount - LocalPassengersCount]
    ];

    const options1 = {
        title: "Passengers Count",
        sliceVisibilityThreshold: 0.2, // 20%
        pieHole: 0.4,
        is3D: false,
    };


    return (
        <div >
            <AdminSidebar1 />
            <div className="section-to-print">
                <div className="container" style={{ marginLeft: "350px", marginTop: "-30px", marginBottom: "20px" }}>
                    <h1 style={{ marginLeft: "50px", marginTop: "110px", marginBottom: "10px" }}>Passenger Report</h1>
                    <table>
                        <thead>
                            <tr>
                                <td>
                                    <div class="card" style={{ height: "210px", marginTop: "-50px" }}>
                                        <div class="row">
                                            <div class="column">

                                                <img style={{ marginLeft: "60px", marginTop: "5px", width: "200px", borderRadius: "25px" }} src="../images/passenger.png"></img>
                                            </div>
                                            <div class="column" style={{ marginLeft: "-20px", marginTop: "60px", width: "200px", borderRadius: "25px" }} >
                                                <h4 style={{ textAlign: "center" }}><b>Total Number of Passengers</b></h4>
                                                <h5 style={{ textAlign: "center" }} >{PassengersCount}</h5>
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    <div class="card2" style={{ width: "", marginLeft: "50px" }}>
                                        <Calendar onChange={onChange} value={value} />
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <div class="card1" style={{ height: "240px", marginTop: "-40px" }}>
                                        <div class="row">
                                            <div class="column">
                                                <img style={{ marginLeft: "40px", marginTop: "10px", width: "200px", borderRadius: "25px" }} src="../images/world.png"></img>
                                            </div>
                                            <div class="column" style={{ marginLeft: "-20px", marginTop: "60px", width: "200px", borderRadius: "25px" }} >
                                                <h4 style={{ textAlign: "center" }}><b>Foreign Passengers</b></h4>
                                                <h5 style={{ textAlign: "center" }} >{PassengersCount - LocalPassengersCount}</h5>
                                            </div>
                                        </div>



                                    </div>
                                </td>
                                <td>
                                    <div class="card1" style={{ height: "210px", marginLeft: "-100px" }}>
                                        <div class="row">
                                            <div class="column">
                                                <img style={{ marginLeft: "40px", marginTop: "10px", width: "180px", borderRadius: "25px" }} src="../images/sriLanka.png"></img>
                                            </div>
                                            <div class="column" style={{ marginLeft: "-20px", marginTop: "60px", width: "200px", borderRadius: "25px" }} >


                                                <h4 style={{ textAlign: "center" }}><b>Local Passengers</b></h4>
                                                <h5 style={{ textAlign: "center" }} >{LocalPassengersCount}</h5>
                                            </div>
                                        </div>

                                    </div>
                                </td>
                            </tr>
                            <tr>

                            </tr>
                        </thead>
                    </table>
                    <div style={{ marginTop: "20px", marginLeft: "0px", width: "1050px" }}>
                        <Chart
                            chartType="PieChart"
                            data={data1}
                            options={options1}
                            width={"1050px"}
                            height={"250px"}
                        />
                    </div>

                </div>
            </div>
            <div style={{ textAlign: "center", marginBottom: "30px" }}>
                <button className="reportbtn" style={{ backgroundColor: "rgba(0, 254, 8, 0.852)", borderRadius: "10px", height: "30px", marginLeft: "500px" }} onClick={() => window.print()}>Print</button>
            </div>
        </div>
    )
};

export default PassengerReport;