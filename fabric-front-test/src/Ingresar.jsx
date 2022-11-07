import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import axios from "axios";

const Ingresar = () => {
    const [nombre,setNombre] = useState()
    const [email, setEmail] = useState()
    const [userid, setUserid] = useState()
    
    const ingvalues = () => {
     const value ={
        name: nombre,
        email: email,
        userid: userid
     }
     var data = JSON.stringify(value);
     var config = {
        method: 'post',
        url: 'http://localhost:8080/users',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(response = () => {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    return (
       <div>
       <form > 
        <TextField id="outlined-basic" label="Nombre" variant="outlined" onChange={(e)=>setNombre(e.target.value)}/>
        <p></p>
        <TextField id="filled-basic" label="Email" variant="outlined" onChange={(e)=>setEmail(e.target.value)} />
        <p></p>
        <TextField id="standard-basic" label="ID" variant="outlined" onChange={(e)=>setUserid(e.target.value)}/>
        <p></p>
        <Button  type="submit" onClick={ingvalues}>Enviar</Button>
       </form> 
       </div>  
        )  
  }

export default Ingresar;