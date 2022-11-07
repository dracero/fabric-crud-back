import React, {useEffect, useState} from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const Listageneral = () => {
  const [lista, setLista] = useState([])
  useEffect(() => {
    var config = {
      method: 'get',
      url: 'http://localhost:8080/users',
      headers: { }
    };
    axios(config)
    .then((response) => {
      setLista(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  },[]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
    return(
      <TableContainer sx={{ maxWidth: 577 }} component={Paper}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">ID</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { lista != undefined ?
        lista.map( row => 
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row" align="center">{row.name}</StyledTableCell>
              <StyledTableCell component="th" scope="row" align="center">{row.email}</StyledTableCell>
              <StyledTableCell component="th" scope="row" align="center">{row.userid}</StyledTableCell>
            </StyledTableRow>
          ): null}
        </TableBody>
      </Table>
    </TableContainer>
    ) 
  }

export default Listageneral;