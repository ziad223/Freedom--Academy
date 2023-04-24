import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div className="links">
    <Link to='/' className='link'>Home</Link>
    <Link to='/english' className='link'>English</Link>
    <Link to='/germany' className='link'>Germany</Link>
    <Link to='/french' className='link'>French</Link>
    <Link to='/frontend' className='link'>Frontend</Link>
    <Link to='/icdl' className='link'>Icdl</Link>
    <Link to='/graphic' className='link'>Graphic Design</Link>
    </div>
    </div>
  )
}

export default Sidebar