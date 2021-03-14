import React, { useState } from 'react';

import FormInput from '../form-input/form.input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../utils/firebase.utils';

const SignUp = () => {

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword ){
            alert('password mismatch');
            return;
        }

        const { user } = await auth.createUserWithEmailAndPassword(email, password);

        await createUserProfileDocument(user, {displayName});
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
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
                onChange={(e) => setDisplayName(e.target.value)}
                label="DisplayName"
                value={displayName}
                required
                />
                <FormInput  
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                value={email}
                required
                />
                <FormInput  
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                value={password}
                required
                />
                <FormInput  
                type="password"
                name="confirm_password"
                onChange={(e) => setConfirmPassword(e.target.value)}
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