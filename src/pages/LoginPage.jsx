import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
const LoginPage = () => {

   const [loginUser,setLoginUser] = useState({
      email:"",
      password:""
    })
  
    const handleChange = (e) => {
      let {name , value} = e.target
      setLoginUser({...loginUser , [name]:value})
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(loginUser);
    }


  return (
    <div className="h-full w-full bg-amber-300 flex items-center justify-center">
      
      <form onSubmit={handleSubmit} className="bg-white flex flex-col p-5 gap-2 rounded-2xl shadow-2xl">
        
        <h1 className="text-2xl font-extrabold text-center">Login</h1>

        <TextField name="email" value={loginUser.email} onChange={handleChange} id="outlined-basic" label="Email Address" variant="outlined" />

        <TextField name="password" value={loginUser.password} onChange={handleChange} id="outlined-basic" label="Password" variant="outlined" />

        <p className="text-sm font-semibold mb-5">Forgot Password ?</p>

        <Button variant="contained">Login</Button>

        <p className="mt-5">Not a member? <a href=""> Sign-up here</a> </p>
     
      </form>
    </div>
  );
};

export default LoginPage;
