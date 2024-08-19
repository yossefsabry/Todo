import React from 'react';
import { useNavigate } from 'react-router-dom';

const Link = (props) => {
  const naviagter = useNavigate();
    const handleNavgation = (dir) => {
        if (dir == undefined) return; 
        console.log(dir);
        naviagter(`/${dir}`);
    };
    return(
        <>
            <a href="#" onClick={() => handleNavgation(props.dir)}
                className="text-blue-600 hover:underline dark:text-blue-500 transition">
                {props.massage}
            </a>
        </>
    )
};

export default Link;
