import React from 'react';
import Header from './Header';
import Card from './Card';
const Layout = ({ children }) => {

    return (
        <div>
            <Header/>
            <Card/>
            {children}
        </div>
    );
}

export default Layout;