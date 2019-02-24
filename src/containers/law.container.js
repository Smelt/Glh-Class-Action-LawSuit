import React from "react";
import Header from "../components/header.component";
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };



export class Law extends React.Component {


state = {
    amount: 0,
    modalIsOpen: false
}

openModal = () => {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal = () =>  {
    // references are now sync'd and can be accessed.
    //this.subtitle.style.color = '#f00';
  }
 
  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

constructor(props) {
        super(props);
    }

    addGingerale = () => {
        this.setState({
            amount: this.state.amount + 5
        })
    }

    addLaptop = () => {
        this.setState({
            amount: this.state.amount + 750
        })
    }

    addToilet = () => {
        this.setState({
            amount: this.state.amount + 30
        })
    }

    addFire = () => {
        this.setState({
            amount: this.state.amount + 31
        })
    }

    render() {
        return (
            <div>
                <Header name={"Shivam"} />
                <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <img id="amazon-header" src="https://i.imgur.com/3D7UGsA.png"/>
         
          <div class="modal-cont">
            <span>An amazon gift card with the amount </span>
            <span className="mod-amount">${this.state.amount}.00</span>
            <span> is being generated. Please check your email: 
                <a>shivam.satyarthi@gmail.com</a>.</span>
            <span> If you have problems please contact our help line at (212)555-1234 or</span>
            <span> our email <a>customer-support@amazon.com</a></span>
            
          </div>
        </Modal>
                <div className="law-container">
                    <div className="settlement">
                        <div className="settlement-title">
                            Product: Gingerale
                        </div>
                  
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
                            Product: Charmin Fresh...
                        </div>
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
                            
                            <button className="aprv-btn" onClick={this.addToilet}>Approve</button>
                            <button className="rej-btn" >Reject</button>
                            </div>
                        </div>    
                    </div>

                    <div className="settlement">
                        <div className="settlement-title">
                            Product: Poz-Lok Fire...
                        </div>

                        <div className="settlement-content">
                            <span>This product: </span>
                            <span className="product"> Poz-Lok Fire Sprinkler (1) </span>
                            <span> that you purchased from Amazon on </span>
                            <span className="date"> Jan 11th 2017 </span>
                            <span> is elligible for compensation for an estimated amount of </span>
                            <span className="amount"> $31</span>
                            <br/> 
                            <span className="case-num">Case Number: </span>
                            <span>C-00-20749-JF</span>
                            <br/>
                            <div className="btn-row">
                            
                            <button className="aprv-btn" onClick={this.addFire}>Approve</button>
                            <button className="rej-btn" >Reject</button>
                            </div>
                        </div>    
                    </div>


                         <div className="settlement">
                        <div className="settlement-title">
                            Product: Lenovo Laptop
                        </div>

                        <div className="settlement-content">
                            <span>This product: </span>
                            <span className="product"> Lenovo Laptop (1) </span>
                            <span> that you purchased from Amazon on </span>
                            <span className="date"> Mar 20th 2014 </span>
                            <span> is elligible for compensation for an estimated amount of </span>
                            <span className="amount"> $750</span>
                            <br/> 
                            <span className="case-num">Case Number: </span>
                            <span>4:15-CV-02625-HSG</span>
                            <br/>
                            <div className="btn-row">
                            
                            <button className="aprv-btn" onClick={this.addLaptop}>Approve</button>
                            <button className="rej-btn" >Reject</button>
                            </div>
                        </div>   

              
                    </div>
                    <div className="total-bar">
                            <span className="estimate-title">Estimated Compensation</span>
                            <span className="est-comp">$<span>{this.state.amount}.00</span></span>

                            <button className="t-cancel-btn">Cancel</button>
                            <button className="t-submit-btn"  onClick={this.openModal}>Submit</button>
                        </div>
                </div>
            </div>

        )
    }
}

export default Law;
