import React from 'react';
import Header from './Header';
import Card from './Card';
import Footer from './Footer';
const Layout = ({ children }) => {

    return (
        <div>
            <Header/>
            <Card/>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;