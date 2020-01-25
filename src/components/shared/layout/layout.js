import React from 'react';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';
import './layout.scss';
import '../../../styles/index.scss';

const Layout  = (props) => {
    return (
        <div className="main-container">
            <Navbar />
            {props.children} 
        </div>
    );
}
export default Layout;