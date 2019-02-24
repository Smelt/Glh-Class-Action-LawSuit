import React from "react";
import Header from "../components/header.component";
import Modal from 'react-modal';
import { Link } from 'react-router-dom';


export class Law extends React.Component {

constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header name={"Shivam"} />
                <div className="law-container">
                    <div className="settlement">
                        <div className="settlement-title">
                            Product: Gingerale
                        </div>
                        <br/>
                        <div className="settlement-content">
                            <span>This product: </span>
                            <span className="product"> Gingerale (1) </span>
                            <span> that you purchased from Amazon on </span>
                            <span className="date"> Dec 19th 2017 </span>
                            <span> is elligible for compensation for an estimated amount of </span>
                            <span className="amount"> $5.00 </span>
                            <br/> 
                            <span className="case-num">Case Number: </span>
                            <span>1822-CC11811</span>
                            <br/>
                            <div className="btn-row">
                            
                            <button className="aprv-btn" onClick={this.addGingerale}>Approve</button>
                            <button className="rej-btn" >Reject</button>
                            </div>
                        </div>    
                    </div>


                    <div className="settlement">
                        <div className="settlement-title">
                            Product: Charmin Freshmates...
                        </div>
                        <br/>
                        <div className="settlement-content">
                            <span>This product: </span>
                            <span className="product"> Charmin Freshmates Flushable Wipes (1) </span>
                            <span> that you purchased from Amazon on </span>
                            <span className="date"> June 21st 2017 </span>
                            <span> is elligible for compensation for an estimated amount of </span>
                            <span className="amount"> $30</span>
                            <br/> 
                            <span className="case-num">Case Number: </span>
                            <span>3:15-cv-02150</span>
                            <br/>
                            <div className="btn-row">
                            
                            <button className="aprv-btn" onClick={this.addGingerale}>Approve</button>
                            <button className="rej-btn" >Reject</button>
                            </div>
                        </div>    
                    </div>

                    <div className="settlement">
                        <div className="settlement-title">
                            Product: Poz-Lok Fire...
                        </div>
                        <br/>
                        <div className="settlement-content">
                            <span>This product: </span>
                            <span className="product"> Poz-Lok Fire Sprinkler (1) </span>
                            <span> that you purchased from Amazon on </span>
                            <span className="date"> Jan 11th 2017 </span>
                            <span> is elligible for compensation for an estimated amount of </span>
                            <span className="amount"> $30</span>
                            <br/> 
                            <span className="case-num">Case Number: </span>
                            <span>C-00-20749-JF</span>
                            <br/>
                            <div className="btn-row">
                            
                            <button className="aprv-btn" onClick={this.addGingerale}>Approve</button>
                            <button className="rej-btn" >Reject</button>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>

        )
    }
}

export default Law;
