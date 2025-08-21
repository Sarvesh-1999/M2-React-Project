import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { AxiosInstance } from "../routes/axiosInstance";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignupPage = () => {
  const [signupUser, setSignupUser] = useState({
    username: "",
    email: "",
    password: "",
  });


  let navigate = useNavigate()



  const handleChange = (e) => {
    let { name, value } = e.target;
    setSignupUser({ ...signupUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(signupUser);// user data

    // sending data to backend
    let res = await AxiosInstance.post("/users", signupUser );
    
    if(res.status === 201){
      // alert("Signup success")
      toast.success("Signup Success")

      navigate("/login")

      setSignupUser({
        username:"",
        email:"",
        password:""
      })
    }else{
      toast.error("Signup Failed")
    }
    
  };

  return (
    <div className="h-full w-full bg-amber-300 flex items-center justify-center">
      <form className="bg-white flex flex-col p-5 gap-2 rounded-2xl shadow-2xl">
        <h1 className="text-2xl font-extrabold text-center">Signup</h1>

        <TextField
          name="username"
          value={signupUser.username}
          onChange={handleChange}
          id="outlined-basic"
          label="Username"
          variant="outlined"
        />

        <TextField
          name="email"
          value={signupUser.email}
          onChange={handleChange}
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
        />

        <TextField
          name="password"
          value={signupUser.password}
          onChange={handleChange}
          id="outlined-basic"
          label="Password"
          helperText="Atleast 8 characters"
          variant="outlined"
        />

        <Button onClick={handleSubmit} variant="contained">
          Signup
        </Button>

        <p className="mt-5">
          Already a member? <a href=""> Log-in here</a>{" "}
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
