import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import Header from '@components/Header/Header';

const Home = () => {
    return (
        <ErrorBoundary>
            <Header/>
        </ErrorBoundary>
    );
};

export default Home;
