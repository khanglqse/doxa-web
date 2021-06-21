import React from 'react'
import UserProfile from '../components/User'
import {connect} from 'react-redux'

const UserContainer = (props) => {
    return (<UserProfile />)
}

const mapDispatchToProps = (dispatch) => ({
    updateUser: (name) => dispatch({type: 'UPDATE_USER', name})
})

export default connect(null, mapDispatchToProps)(UserContainer)