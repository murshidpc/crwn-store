import React from 'react';

import {SpinnerContainer, SpinnerOverlay} from './with-spinner.style';

const WithSpinner = WrappedComponent => {
    const spinner =  ({isLoading, ...otherProps}) => {
        console.log(isLoading);
        return (isLoading ?  (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
    ))
}
    return spinner;
}
export default WithSpinner;