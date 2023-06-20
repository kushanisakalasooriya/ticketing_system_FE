import { useState } from 'react';
import AdminNav from '../../navbars/AdminNav';
import './style.css';
import './adminButton.css';


const AdminSidebar1 = () => {

    return (
        <div>
            {/* side bar */}
            <section id="sidebar">
                <a href="#" class="brand">
                    <i ></i>
                    <span style={{ color: "black", marginLeft: "40px", marginTop: "20px" }} >Admin Dashboard</span>
                </a>
                <ul class="side-menu top">
                    <span>Dashboard</span>
                    <li class="" >
                        <a href="/dashboard" >
                            <i class='bx bxs-dashboard' ></i>
                            <span class="text" style={{ fontWeight: "bold" }}>Dashboard</span>
                        </a>
                    </li>
                    <br></br>
                    <span>Bus Details</span>
                    <li>
                        <a href="/travel-history" >
                            <i class='bx bxs-time' ></i>
                            <span class="text" style={{ fontWeight: "bold" }}>Travel History</span>
                        </a>
                    </li>
                    <li>
                        <a href="/assign-bus" className='sideBarBtn' >
                            <i class='bx bxs-doughnut-chart' ></i>
                            <span class="text">Assign Bus</span>
                        </a>
                    </li>
                    <li>
                        <a href="/bus-time-table" className='sideBarBtn'>
                            <i class='bx bxs-calendar' ></i>
                            <span class="text">Bus Timetable</span>
                        </a>
                    </li>
                    <br></br>
                    <span>Passenger Details</span>
                    <li>
                        <a href="/foreign-passengers" className='sideBarBtn'>
                            <i class='bx bxs-smile' ></i>
                            <span class="text"> Foreign Passengers</span>
                        </a>
                    </li>
                    <li>
                        <a href="/local-passengers" className='sideBarBtn'>
                            <i class='bx bxs-face' ></i>
                            <span class="text"> Local Passengers</span>
                        </a>
                    </li>

                    <br></br>
                    <span>Report</span>
                    <li>
                        <a href="/passengers-report" className='sideBarBtn'>
                            <i class='bx bxs-report' ></i>
                            <span class="text">Passenger Report</span>
                        </a>
                    </li>
                </ul>

            </section>


            <nav>
                <AdminNav />
            </nav>


        </div>
    )

}

export default AdminSidebar1;
