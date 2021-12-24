import React from "react";
import Avatar from '@mui/material/Avatar';

import "./Header.css";
function Header(){
    return (
        <div className="header">
            <h1 >SukoshiURL</h1>
            <div className="avatar">
                 <a href="https://github.com/ReeKid2002/sukoshi-url-shortner-frontend"><Avatar src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Github" className="git" /></a>
                 <a href="https://github.com/ReeKid2002" target="__blank"><Avatar src="https://avatars.githubusercontent.com/u/69151829?v=4" alt="Rahul Behera" className="git" /></a>
            </div>
        </div>
    );
}

export default Header;