import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav>
      
    <div className="left">
        <a href="/"><h1>welcome to home page :)</h1></a>
        <p>React UI</p>
    </div>
    <ul className='right'>
        <li><a href="/">Home</a></li>
        <li><a href="/charts">Charts</a></li>
        <li><a href="/datagrid">DataGrid</a></li>
    </ul>
   
</nav>
  );
};

export default Navbar;
