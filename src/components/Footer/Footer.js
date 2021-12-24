import React, { useState, useEffect } from "react";
import CopyrightIcon from '@mui/icons-material/Copyright';
import "./Footer.css";

function Footer() {
    const [year, setYear] = useState("");
    useEffect(() => {
        const date = new Date();
        const year = date.getFullYear();
        console.log(year);
        setYear(year);
    }, []);
    return (
        <div className="footer">
            <CopyrightIcon className="copy" />
            <h1>{year}</h1>
        </div>
    );
}

export default Footer;