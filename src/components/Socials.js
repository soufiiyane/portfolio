import '../assets/css/Socials.css';
import WOW from 'wowjs';
import React, { useState, useEffect } from 'react';
import "../../node_modules/wowjs/css/libs/animate.css"

function Socials(){

    useEffect(() => {
        const wow = new WOW.WOW({
          live: false,
        });
        wow.init();
      }, []);

    return(
        <ul className='wow fadeInDown' data-wow-duration="1s">
            <li><a target='_blank' href="https://github.com/soufiiyane"><i className="fa-brands fa-github-alt"></i></a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/soufiiyane/"><i className="fa-brands fa-linkedin-in"></i></a></li>
            <li><a target='_blank' href="https://www.instagram.com/soufiiyane/"><i className="fa-brands fa-instagram"></i></a></li>
            <li><a target='_blank'  href="https://twitter.com/AitSoufiyane"><i className="fa-brands fa-twitter"></i></a></li>
            <li><span></span></li>
        </ul>
    )
}

export default Socials;