import React, { Component } from 'react';
import PaystackButton from 'react-paystack';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
// import { firebase } from '../../firebase';
// import { newPayment } from '../../Notifications/slack';
// import { Menu } from './menu';

export default class Payment extends Component {
  constructor(props) {
      super(props);
      this.state = {
       op:false,
       open: false,
       shown: true,
       key: "pk_test_09001e1bd785eacacc95aa27fcc5321b6d05f55b", //PAYSTACK PUBLIC KEY
       email: "oyinkuromosesvictor@gmail.com",  // customer email
       amount: 50000, //equals NGN100,
       userId:'',
       balance:0,
       transactions:[],
       loading:false,
       showForm:true
      }
    }

    componentDidMount () {
    }
    componentWillUnmount () {
    }
    getTransactions = (userId) => {
    }

    updateBalance = (result) => {
    }
    callback = (response) => {
          const data = {
            ref: response.trxref
          };
          fetch('http://localhost:3400/hotel/verify', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(res =>res.json()).then(result => {
            if (result.code === "ECONNRESET"){
              this.error('Network error occurred. Please try again');
            } else if (!result.status ) {
              this.error(result.message);
             }else{
            //   this.updateBalance(result);
            //   this.addTransaction(result.data.amount/100);
            //   this.sendSlackNotification(result)
                console.log(result)
             }
            
          }).catch(e => {
            console.log(e);
          })
      }

    close = () => {
      console.log("Payment closed");
    }

    getReference = () => {
      //you can put any unique reference implementation code here
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

      for( let i=0; i < 15; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }

    error = (message) => {
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        width:'100%'
        });
        this.setState({ loading:false })
     }
    success = (message) => {
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        width:'100%'
        });
        this.setState({ loading:false })
    }

    handleChange = (e) => {
      this.setState({
        amount: Number (this.props.amount) * 100
      })
    }


  render(){
      const money = Number (this.props.amount) * 100
    return (
      <div className='list-body col-sm-12'>
            <div className='col-sm-8'>
            <ToastContainer />
            </div>
            <div className='col-sm-4'>
                <div>
                  <div style={{margin:10}} className='row text-center'>
                      <PaystackButton
                        text="Pay"
                        className="btn btn-md btn-primary"
                        callback={this.callback}
                        close={this.close}
                        disabled={false}
                        embed={false}
                        reference={this.getReference()}
                        email={this.state.email}
                        amount={money}
                        paystackkey={this.state.key}
                        tag="button"
                      /> &nbsp;
                </div>
                </div>
            </div>
      </div>

          )
  }

};