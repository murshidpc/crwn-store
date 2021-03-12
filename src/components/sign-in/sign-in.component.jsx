import React, { useState } from 'react';
import FormInput from '../form-input/form.input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../utils/firebase.utils';
import './sign-in.style.scss';


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
    }

    return(
        <div className="sign-in">
            <h1 className="title">I Already have an account</h1>
            <span className="title">Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    type="email"  
                    name="email" 
                    value={email} 
                    label="Email"
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                <FormInput 
                    type="password" 
                    name="password" 
                    label="Password"
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogle > {''}Sign in with Google{''} </CustomButton>
                    </div>                
            </form>
        </div>
    )
}

export default SignIn;