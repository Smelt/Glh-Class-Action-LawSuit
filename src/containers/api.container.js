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

export class Api extends React.Component {

    state = {
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

      

   

    render() {
        return (
            <div>
                <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          className=""
        >
 
          <img id="amazon-header"  className="fade-in-1" src="https://i.imgur.com/3D7UGsA.png"/>
         
          <div class="modal-contenit fade-in-1">
          <label>Email</label>
          <input type="text" class="form-control" placeholder="" value="shivamsatyarthi@gmail.com" aria-describedby="basic-addon1"/>
          <br/>
          <label>Password</label>
          <input type="password" class="form-control" placeholder="" aria-describedby="basic-addon1"/>
            <br/>
            
          </div>
            <div className="btn-row fade-in-1">
            <Link to="/Data"> <button id="amazon-sign-in">Sign In</button></Link>
            </div>
        </Modal>
                <Header name={" Shivam"} />
                <div className="api-container">


                    <div className="my-card fade-in-1" >
                        <img className="card-image" src="https://i.imgur.com/OuWbRu5.jpg" />
                        <div className="payment-block">
                            <div><span className="header" >Service: </span><span>Chase Financial View</span></div>
                            <div><span className="header">Last Reviewed:</span><span> Jan 1st 2019</span></div>
                            <div><span className="header">Transaction History: </span><span>  March 2016 - Feb 2019</span></div>
                            <div><span className="header">Claimed: </span><span>  $88.99</span></div>
                        </div>
                    </div>
                    <div className="my-card fade-in-2" >
                        <img className="card-image" src="https://i.imgur.com/4nLaFRL.jpg" />
                        <div className="payment-block">
                            <div><span className="header" >Service: </span><span>Bank of America</span></div>
                            <div><span className="header">Last Reviewed:</span><span> Jan 1st 2019</span></div>
                            <div><span className="header">Transaction History: </span><span>  July 2018 - Feb 2019</span></div>
                            <div><span className="header">Claimed: </span><span className="">  $542.31</span></div>
                        </div>
                    </div>



                    <div className="my-card fade-in-3" >
                        <img className="card-image" src="https://i.imgur.com/SlcPD3z.jpg" />
                        <div className="payment-block">
                            <div><span className="header" >Service: </span><span>Amazon</span></div>
                            <div><span className="header" >Status </span><span>Not Connected: </span></div>
                            <div><span className="header">Claimed: </span><span>  $0.00</span></div>
                            <button id="linkAccbtn" onClick={this.openModal}><i class="fas fa-link"></i> Link Account</button>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default Api;
