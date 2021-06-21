import React from 'react'
import Register from '../components/Register'

import {SignInSignUpContainer, Title} from './styles'

const Container = (props) => {
    return (
        <SignInSignUpContainer>
            <Title>Sign up to DOXA Holding</Title>
            <Register />
        </SignInSignUpContainer>
    )
}

export default Container