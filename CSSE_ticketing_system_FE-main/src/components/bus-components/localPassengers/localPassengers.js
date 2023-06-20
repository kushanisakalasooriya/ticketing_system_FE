import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "./allUsers.css";
import "./tabledata.css";
import styles from './style.module.css';
import AdminSidebar1 from "../adminDashboard/sideBar";


function LocalPassengers() {

    const [items, setItems] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);

    const columns = [
        {
            name: 'Passenger Type',
            selector: row => row.type,
            width: '140px'
        },
        {
            name: 'Passenger NIC',
            selector: row => row.idNumber,
            width: '200px'
        },
        {
            name: 'Passenger Name',
            selector: row => row.name,
            sortable: true,
            width: "240px"
        },
        {
            name: 'Contact No',
            selector: row => row.contactNo,
            sortable: true,
            width: '240px'

        },
        {
            name: 'Email Address',
            selector: row => row.email,
            sortable: true,
            width: '270px'

        }
    ];


    const getItems = async () => {
        try {
            const user = JSON.parse(sessionStorage.getItem("policemen"));
            const response = await axios.get('http://localhost:5050/passenger');

            let temp = [];

            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].type === 'Local') {

                    temp.push(response.data[i])

                }
            }

            setItems(temp);
            setFilteredItems(temp);

        } catch (err) {
        }
    }

    useEffect(() => {
        getItems();
    }, [])

    // normal search
    useEffect(() => {
        const result = items.filter((item) => {
            return item.idNumber.toLowerCase().match(search.toLowerCase()) || item.name.toLowerCase().match(search.toLowerCase());
        });
        setFilteredItems(result);
    }, [search])

    const clearData = (e) => {
        window.location.reload(false);

    }

    return (
        <>
            <AdminSidebar1 />
            <div className="travelContainer">
                <div className="container bkgrnd">

                    <h1 className="header">Local Passengers Details</h1>

                    <div className="tbl">
                        <DataTable
                            columns={columns}
                            data={filteredItems}
                            pagination
                            fixedHeader
                            fixedHeaderScrollHeight="500px"
                            highlightOnHover
                            subHeader
                            subHeaderComponent={
                                <>
                                    <input
                                        type="text"
                                        placeholder="Search NIC Number.."
                                        className="w-25 form-control"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                    <button className={styles.can_btn} style={{ marginLeft: "15px" }} onClick={clearData}> Clear</button>

                                </>
                            }
                        />
                    </div>
                </div>
            </div>

        </>
    );

}

export default LocalPassengers;