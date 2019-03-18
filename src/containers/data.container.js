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
                headerName: "Item", field: "item_name", width: 340
            }, {
                headerName: "Order_Id", field: "order_id", width: 250
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
            rowData: []
        }
    }

    componentDidMount = async() => {
        
        let x = 100;

        amazonData.forEach(row => {
            
            x += Math.floor(Math.random() * 100) + 70;
            console.log(row);
            setTimeout(() => {
                this.setState({
                    rowData: [...this.state.rowData, row]
                });
            }, x);
            
        });
    
    }

    render() {
        return (
            <div>
                <Header name={"Shivam"} />
                <div className="data-container ">
                <div className="order-title-container">
                    Amazon Order History
                </div>
                    <div
                        className="ag-theme-balham"
                        style={{
                            height: '1500px',
                            width: '1140px'
                        }} 
                    >
                        <AgGridReact
                            columnDefs={this.state.columnDefs}
                            rowData={this.state.rowData}>
                        </AgGridReact>

                        
                        
                    </div>
                    <div className="warning-container">
                      
                        <span> * Reminder Classify only has orders for those that were completed with a valid card, orders posted after March 15th will not</span>
                        <span>be reflected in order history</span>
                    </div>
                    <div className="btn-data-con">
                        <button className="btn cancel-btn">Cancel</button>
                            <Link to="/Law/Amazon"><button className="btn data-btn">Process History</button></Link>
                        </div>
                </div>
            </div>

        )
    }
}

export default Data;
