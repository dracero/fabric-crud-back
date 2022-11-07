import React, {useState } from 'react';
import {Link, Outlet} from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    e.preventDefault()
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div> 
    <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      OPCIONES
      </Button>  
    <Menu 
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      >
           <MenuItem >
              <Link to="/Listageneral">All Rows</Link>
            </MenuItem>  
            <MenuItem >
              <Link to="/Ingresar ">Ingresar Alumno</Link>
            </MenuItem>
            <MenuItem >
              <Link to="/Buscarid">Buscar por ID</Link>
            </MenuItem>
            <MenuItem >
              <Link to="/Modificar">Modificar</Link>
            </MenuItem>
            <MenuItem >
              <Link to="/Borrar">Borrar</Link>
            </MenuItem>
      </Menu>      
       <Outlet />
     </div> 
)}  

export default Navbar;