import React, { useState } from 'react';
import FormInput from '../form-input/form.input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle} from '../../utils/firebase.utils';
import './sign-in.style.scss';


const SignIn = () => {
    const [userCredential, setUserCredential] = useState({
        email: '',
        password: ''
    })
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            await auth.signInWithEmailAndPassword(email, password);
            setUserCredential({
                email: '',
                password: ''
            })
        }catch(error){
            console.log(error)
        }       
    }

    const handleChange = (event) => {
        const { name, value} = event.target;

        setUserCredential({
            ...userCredential, [name] : value
        })
        
    }
    const { email, password } = userCredential;
    console.log(email, password);
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
                    onChange={handleChange}
                    />
                <FormInput 
                    type="password" 
                    name="password" 
                    label="Password"
                    value={password} 
                    onChange={handleChange}
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