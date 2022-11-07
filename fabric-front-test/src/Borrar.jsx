import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import axios from "axios";

const Borrar = () => {
  const [ident, setIdent] = useState('')
  const [nombre,setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [userid, setUserid] = useState('')

    const buscaid = () => {
      var config = {
        method: 'get',
        url: 'http://localhost:8080/users/'+ident,
        headers: { }
      };
      axios(config)
      .then(response =>  {
        setNombre(response.data.name);
        setEmail(response.data.email);
        setUserid(response.data.userid)
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    const borra = () => {
        var config = {
            method: 'delete',
            url: 'http://localhost:8080/users/'+ident,
            headers: { }
          };
          
          axios(config)
          .then(response =>{
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
          
      }

    return (
       <div>
       <form > 
        <TextField id="standard-basic" label="_ID" variant="standard" onChange={(e)=>setIdent(e.target.value)} />
        <p></p><p></p>
        <TextField id="standard-basic" variant="outlined" value={nombre} />
        <p></p>
        <TextField id="outlined-basic"  variant="outlined" value={email}/>
        <p></p>
        <TextField id="filled-basic"  variant="outlined" value={userid} />
        <p></p>
        <Button onClick={buscaid}>Buscar</Button>
        <p></p>
        <Button onClick={borra}>Borrar</Button>
       </form> 
       </div>  
        )  
  }

export default Borrar;