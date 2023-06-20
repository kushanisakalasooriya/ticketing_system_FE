import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "./allUsers.css";
import "./tabledata.css";
import styles from './style.module.css';
import Swal from "sweetalert2";
import AdminSidebar1 from "../adminDashboard/sideBar";


function TravelHistory() {

    const [items, setItems] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);
    const [modal, setModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);

    const columns = [
        {
            name: 'Date',
            selector: row => row.busDate,
            sortable: true,
            width: "110px"
        },
        {
            name: 'Bus No',
            selector: row => row.busNo,
            width: '100px'
        },
        {
            name: 'Start location',
            selector: row => row.startLocation,
            sortable: true,
            width: '130px'

        },
        {
            name: 'Starting Time',
            selector: row => row.startingTime,
            sortable: true,
            width: '130px'

        },
        {
            name: 'Arrive Location',
            selector: row => row.arriveLocation,
            sortable: true,
            width: '130px'

        },
        {
            name: 'Arriving Time',
            selector: row => row.arriveTime,
            sortable: true,
            width: '130px'

        },
        {
            name: 'Assign Driver',
            selector: row => row.driverName,
            sortable: true,
            width: '150px'

        },
        {
            name: 'Assign Inspector',
            selector: row => row.inspectorName,
            sortable: true,
            width: '150px'

        },
        {
            name: 'Action',
            cell: (row) =>
                <>
                    <Fragment>
                        <button onClick={() => onSubmit(row._id)} type="button" className="btn btn-outline-danger btn-sm" > Delete</button>
                    </Fragment>
                </>
        },
    ];

    const onSubmit = async (id) => {
        await Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to delete the selected item?",
            icon: 'warning',
            showDenyButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: `Cancel`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(

                    'Deleted!',
                    '',
                    'success',
                    axios.delete("http://localhost:5050/bus/" + id)
                        .then((res) => {
                            const modified = filteredItems.filter(item => item._id !== id);
                            setFilteredItems(modified);
                        }),
                )
            } else if (result.isDenied) {
                Swal.fire(
                    'Item is not deleted',
                    '',
                    'error'
                )
            }
        })
    }

    const getItems = async () => {
        try {
            const user = JSON.parse(sessionStorage.getItem("policemen"));
            const response = await axios.get('http://localhost:5050/bus/');

            const currentDate = new Date();
            const today = (currentDate.getFullYear() + '-' + ((currentDate.getMonth() > 8) ? (currentDate.getMonth() + 1) : ('0' + (currentDate.getMonth() + 1))) + '-' + ((currentDate.getDate() > 9) ? currentDate.getDate() : ('0' + currentDate.getDate())));



            let temp = [];

            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].busDate.split("T")[0] < today) {

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
            return item.busNo.toLowerCase().match(search.toLowerCase()) || item.driverName.toLowerCase().match(search.toLowerCase()) || item.inspectorName.toLowerCase().match(search.toLowerCase()) || item.startLocation.toLowerCase().match(search.toLowerCase()) || item.arriveLocation.toLowerCase().match(search.toLowerCase()) || item.startingTime.toLowerCase().match(search.toLowerCase());
        });
        setFilteredItems(result);
    }, [search])

    const clearData = (e) => {
        window.location.reload(false);

    }

    const openUpdateModal = (data) => {
        setUpdateModal(true);
        window.sessionStorage.setItem("busDetails", data);

    }


    return (
        <>
            <AdminSidebar1 />
            <div className="travelContainer">
                <div className="container bkgrnd">

                    <h1 className="header">Travel History</h1>

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
                                        placeholder="Search Here.."
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

export default TravelHistory;