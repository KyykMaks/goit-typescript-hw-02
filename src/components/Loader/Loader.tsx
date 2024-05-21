import React from 'react';
import { ProgressBar} from 'react-loader-spinner';

export const Loader: React.FC = () => {
    return (
    <ProgressBar
    visible={true}
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="progress-bar-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />
    )
};