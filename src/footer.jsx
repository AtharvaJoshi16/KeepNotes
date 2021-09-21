import React from 'react';

const Footer = () =>{
    const year= new Date().getFullYear();
    return (
        <>
        <footer className="footer">
            <h3>By Atharva Joshi</h3>
            <p>copyright @ {year}</p>
        </footer>
        </>
    )
};

export default Footer;
