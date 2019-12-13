import { Redirect, Route } from 'react-router-dom'

import React from 'react'
import { connect } from 'react-redux'

const CheckNotAuth = ({component: Component, authenticated, ...rest}) => (
    <Route 
        {...rest}
        render = {(props) => authenticated === true ? <Redirect to='/dashboard' /> : <Component {...props} />}
    />
)

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
})

export default connect(mapStateToProps)(CheckNotAuth)