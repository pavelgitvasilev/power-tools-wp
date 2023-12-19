// libraries
import React from 'react';
// components
// import { Header } from 'components/Header';
// import { Footer } from 'components/Footer';

export const Layout = ({ children }) => {
    return (
        <>
            {/* <Header /> */}
            <main>{children}</main>
            {/* <Footer qrBlockAdw={qrBlockAdw} pageType={pageType} /> */}
        </>
    );
};
