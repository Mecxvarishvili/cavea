import React, { ReactElement } from 'react';

interface Props {
    isLoading: boolean,
    children: React.ReactElement
}

const Loader = ({isLoading, children}: Props) => {
    return (
        isLoading ?
        <div>loading</div>
        : children
    );
};

export default Loader;