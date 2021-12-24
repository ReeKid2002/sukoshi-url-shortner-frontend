import React from "react";
import DoneIcon from '@mui/icons-material/Done';
import "./Intro.css";

function Intro() {
    return (
        <div className="introContainer">
            <div className="introContainer__header">
                <h3 className="header">Welcome To</h3>
                <h1>SukoshiURL</h1>
            </div>
            <div className="pointer">
                <div className="point">
                    <DoneIcon />
                    <h1>Input The URL</h1>
                </div>
                <div className="point">
                    <DoneIcon />
                    <h1>Press The Button</h1>
                </div>
                <div className="point">
                    <DoneIcon />
                    <h1>Get Your Short URL</h1>
                </div>
            </div>
        </div>
    );
}

export default Intro;