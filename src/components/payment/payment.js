import 'react-toastify/dist/ReactToastify.min.css'

import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import PaystackButton from 'react-paystack'
import axios from 'axios'

// import { firebase } from '../../firebase';
// import { newPayment } from '../../Notifications/slack';
// import { Menu } from './menu';

export default class Payment extends Component {
  constructor (props) {
    super(props)
    this.state = {
      op: false,
      open: false,
      shown: true,
      key: 'pk_test_c9901fe1df9d82daa2b3f646e3c84af784d3961c', //PAYSTACK PUBLIC KEY
      email: 'oyinkuromosesvictor@gmail.com', // customer email
      amount: 50000, //equals NGN100,
      userId: '',
      balance: 0,
      transactions: [],
      loading: false,
      showForm: true
    }
  }

  // componentDidMount () {}
  // componentWillUnmount () {}
  // getTransactions = userId => {}

  // updateBalance = result => {}
  callback = response => {
    const data = {
      ref: response.trxref,
      BookingInfo: this.props.info,
      userId: this.props.userId
    }
    console.log('hererh', data)
    axios.post('https://calm-anchorage-14244.herokuapp.com/hotel/verify', data)
      .then(result => {
        if (result.code === 'ECONNRESET') {
          this.error('Network error occurred. Please try again')
        } else if (!result.status) {
          this.error(result.message)
        } else {
          //   this.updateBalance(result);
          //   this.addTransaction(result.data.amount/100);
          //   this.sendSlackNotification(result)
          console.log(result.data.message._id)
          // if(result){
             window.location.href=`/confirmnation/${result.data.message._id}/${result.data.message.Room}/${result.data.message.hotelId}`
          // }
          console.log('success',result)
        }
      })
      .catch(e => {
        console.log(e)
      })
  }

  close = () => {
    console.log('Payment closed')
  }

  getReference = () => {
    //you can put any unique reference implementation code here
    let text = ''
    let possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (let i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length))

    return text
  }

  error = message => {
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      width: '100%'
    })
    this.setState({ loading: false })
  }
  success = message => {
    toast.success(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      width: '100%'
    })
    this.setState({ loading: false })
  }

  handleChange = e => {
    this.setState({
      amount: Number(this.props.amount) * 100
    })
  }

  render () {
    console.log(this.props.info, 'info')
    const money = this.props.amount * 100
    console.log(money)
    return (
      <div className={this.props.container}>
        <div className='row'>
          <div className='col-md-12'>
            <ToastContainer />
          </div>
        </div>
        <PaystackButton
          text='Make Pay Now'
          className={this.props.butin}
          callback={this.callback}
          close={this.close}
          disabled={false}
          embed={true}
          reference={this.getReference()}
          email={this.state.email}
          amount={money}
          paystackkey={this.state.key}
          tag='button'
        />{' '}
        &nbsp;
      </div>
    )
  }
}
