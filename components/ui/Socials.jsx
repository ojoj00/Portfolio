import { Link } from 'lucide-react';
import React from 'react'

import {FaGithub , FaLinkedinIn, FaYoutube, FaTwitter} from "react-icons/fa";

const socials = [
    {icon : <FaGithub />, path:""},
    {icon : <FaLinkedinIn />, path:""},
    {icon : <FaYoutube />, path:""},
    {icon : <FaTwitter />, path:""}
    
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index)=> {
        return (
        <Link key={index} href={socials.path} className={iconStyles}>
          {item.icon}
        </Link>
        );
      })}
      
    </div>
  )
}

export default Socials
