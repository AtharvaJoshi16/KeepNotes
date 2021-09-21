import React from 'react';

const Footer = () =>{
    const year= new Date().getFullYear();
    return (
        <>
        <footer className="footer">
            <h2>By Atharva Joshi</h2>
            <p>copyright @ {year}</p>
        </footer>
        </>
    )
};

export default Footer;
