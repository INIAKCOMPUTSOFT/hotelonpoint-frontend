import { Redirect, Route } from 'react-router-dom'

import React from 'react'
import { connect } from 'react-redux'

const CheckNotAuth = ({component: Component, authenticated, ...rest}) => (
    <Route 
    {...rest}
    render = {(props) => authenticated === false ? <Component {...props} /> : <Redirect to='/' />}
    />
)


const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
})

export default connect(mapStateToProps)(CheckNotAuth)