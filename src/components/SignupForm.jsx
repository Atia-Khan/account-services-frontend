import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Box, Checkbox, FormControlLabel } from "@mui/material";

const SignupForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [email, setEmail] = useState("");
  const [cnic, setCnic] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    const newUser = {
      firstName: fname,
      lastName: lname,
      phoneNumber: phone,
      address: address,
      email: email,
      nationalId: cnic,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:8082/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (response.ok) {
        console.log("New User is registered!!!");
        console.log(newUser);
      } else {
        console.log("Some error occurred");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{ backgroundColor: "#b2d1cb", padding: "2rem", borderRadius: "8px" }}
    >
      <h1>Create Account</h1>
      <form onSubmit={handleForm}>
        <Box sx={{ display: "flex", marginBottom: "1rem" }}>
          <TextField
            label="First Name"
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            required
            sx={{ marginRight: "0.5rem" }}
          />
          <TextField
            label="Last Name"
            type="text"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            required
            sx={{ marginLeft: "0.5rem" }}
          />
        </Box>
        <Box sx={{ display: "flex", marginBottom: "1rem" }}>
          <TextField
            label="Phone No"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            sx={{ marginRight: "0.5rem" }}
    
          />

          <TextField
            label="Address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            
            sx={{ marginLeft: "0.5rem" }}
          />
        </Box>

        <Box sx={{ display: "flex", marginBottom: "1rem" }}>

        <TextField
          label="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          sx={{ marginRight: "0.5rem" }}

         
        />

        <TextField
          label="CNIC"
          type="text"
          value={cnic}
          onChange={(e) => setCnic(e.target.value)}
          required
          sx={{ marginLeft: "0.5rem" }}
 
        />
      </Box>
      <Box sx={{ display: "flex", marginBottom: "1rem" }}>

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          sx={{ marginBottom: "1rem" }}
        />
      
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: "#30aaa1",
                "& .MuiIconButton-root": { borderRadius: "4px" },
              }}
            />
          }
          label="Patient"
          onChange={(e) => setRole(e.target.value)}
          value="patient"
          sx={{ marginBottom: "1rem", color: "black" }}
        />

        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: "#30aaa1",
                "& .MuiIconButton-root": { borderRadius: "4px" },
              }}
            />
          }
          label="Counselor"
          onChange={(e) => setRole(e.target.value)}
          value="counselor"
          sx={{ marginBottom: "1rem", color: "black" }}
        />
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ backgroundColor: "#30aaa1", borderRadius:'30%' }}
        >
          Sign Up
        </Button>
      </form>
    </Box>
  );
};

export default SignupForm;
