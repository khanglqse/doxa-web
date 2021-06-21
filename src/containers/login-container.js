import React from 'react'
import Login from '../components/Login'

import {SignInSignUpContainer, Title} from './styles'

const Container = (props) => {
    return (
        <SignInSignUpContainer>
            <Title>Login to DOXA Holding</Title>
            <Login />
        </SignInSignUpContainer>
    )
}

export default Container