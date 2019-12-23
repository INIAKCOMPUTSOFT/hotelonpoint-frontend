import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'


const CheckNotAuth = ({component: Component, authenticated, ...rest}) => (
    <Route 
        {...rest}
        render = {(props) => authenticated === false && <Component {...props} /> }
    />
)

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
})

export default connect(mapStateToProps)(CheckNotAuth)