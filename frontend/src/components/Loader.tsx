import React, { ReactElement } from 'react';

interface Props {
    isLoading: boolean,
    children: React.ReactElement
}

const Loader = ({isLoading, children}: Props) => {
    return (
        isLoading ?
        <div className="lds-ellipsis d-flex my-5 mx-auto"><div></div><div></div><div></div><div></div></div>
        : children
    );
};

export default Loader;