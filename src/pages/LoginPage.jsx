import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { AxiosInstance } from "../routes/axiosInstance";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
const LoginPage = () => {

   const [loginUser,setLoginUser] = useState({
      email:"",
      password:""
    })

  const [allRegistredUser,setAllRegisteredUser] = useState([])

  const navigate = useNavigate()
  
    const handleChange = (e) => {
      let {name , value} = e.target
      setLoginUser({...loginUser , [name]:value})
    }
    
    // get all signup users data
    async function getAllUsers(){
     let res = await AxiosInstance.get("/users")
     console.log(res.data);
     setAllRegisteredUser(res.data)
    }

    useEffect(()=>{
      getAllUsers()
    }, [])
  
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(loginUser);

      // finding registered user in backend
      let authUser = allRegistredUser.find((ele)=>{
        return ele.email === loginUser.email && ele.password === loginUser.password
      })
      console.log(authUser);

      if (authUser) {
        localStorage.setItem("token",Date.now())
        // navigate to home page
        navigate("/")
        toast.success("Login success")
      }else{
        // navigate to signup page
        navigate("/signup")
        toast.error("Login failed")
      }
    }


  return (
    <div className="h-full w-full bg-amber-300 flex items-center justify-center">
      
      <form  className="bg-white flex flex-col p-5 gap-2 rounded-2xl shadow-2xl">
        
        <h1 className="text-2xl font-extrabold text-center">Login</h1>

        <TextField name="email" value={loginUser.email} onChange={handleChange} id="outlined-basic" label="Email Address" variant="outlined" />

        <TextField name="password" value={loginUser.password} onChange={handleChange} id="outlined-basic" label="Password" variant="outlined" />

        <p className="text-sm font-semibold mb-5">Forgot Password ?</p>

        <Button variant="contained" onClick={handleSubmit}>Login</Button>

        <p className="mt-5">Not a member? <a href=""> Sign-up here</a> </p>
     
      </form>
    </div>
  );
};

export default LoginPage;
