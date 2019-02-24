import React from "react";
import Header from "../components/header.component";
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import {amazonData} from '../static/amazon.data';


export class Data extends React.Component {

constructor(props) {
        super(props);
   

        this.state = {
            columnDefs: [{
                headerName: "Item", field: "item_name"
            }, {
                headerName: "Order_Id", field: "order_id"
            }, {
                headerName: "Price", field: "price"
            },
            , {
                headerName: "Purchase_date", field: "purchase_date"
            },
            , {
                headerName: "Quantity", field: "quantity"
            },
        
        
        ],
            rowData: amazonData
        }
    }

    render() {
        return (
            <div>
                <Header name={"Shivam"} />
                <div className="data-container fade-in-3">
                    <div
                        className="ag-theme-balham"
                        style={{
                            height: '350px',
                            width: '1020px'
                        }} 
                    >
                        <AgGridReact
                            columnDefs={this.state.columnDefs}
                            rowData={amazonData}>
                        </AgGridReact>

                        
                        
                    </div>
                    <div className="btn-data-con fade-in-1">
                        <button className="btn cancel-btn">Cancel</button>
                            <Link to="/Law/Amazon"><button className="btn data-btn">Process History</button></Link>
                        </div>
                </div>
            </div>

        )
    }
}

export default Data;
