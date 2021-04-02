import React, { useState } from 'react';

import FormInput from '../form-input/form.input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../utils/firebase.utils';

const SignUp = () => {
    const [userCredentials, setUserCredentials] = useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    });
    const {displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword ){
            alert('password mismatch');
            return;
        }

        const { user } = await auth.createUserWithEmailAndPassword(email, password);

        await createUserProfileDocument(user, {displayName});
        setUserCredentials({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        })
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserCredentials({
            ...userCredentials, [name] : value
        })
    }

    return(
        <div className='sign-up'>
            <h1 className='title'>You are not having a account</h1>
            <span>Sign up with email and password</span>
            <form
            className='sign-up-form'
            onSubmit={handleSubmit}
            >
                <FormInput  
                type="text"
                name="displayName"
                onChange={handleChange}
                label="DisplayName"
                value={displayName}
                required
                />
                <FormInput  
                type="email"
                name="email"
                onChange={handleChange}
                label="Email"
                value={email}
                required
                />
                <FormInput  
                type="password"
                name="password"
                onChange={handleChange}
                label="Password"
                value={password}
                required
                />
                <FormInput  
                type="password"
                name="confirm_password"
                onChange={handleChange}
                label="Confirm Password"
                value={confirmPassword}
                required
                />
            <CustomButton type="submit" > Sign up </CustomButton>
            </form>
        </div>
    )
}

export default SignUp;