import React from "react";
import "./Navbar.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="navbar">
      <nav>
        <div className="navtop">
          <div className="container">
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={"eng"}>English</MenuItem>
                  <MenuItem value={"uz"}>Uzbek</MenuItem>
                  <MenuItem value={"ru"}>Russian</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
        <div className="mainNav">
          <div className="container">
            <Link to={"/"} className="logo">
              <h1>Exclusive</h1>
            </Link>
            <div className="navLinks">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/contact"}>Contact</NavLink>
              <NavLink to={"/about"}>About</NavLink>
              <NavLink to={"/signup"}>Sign Up</NavLink>
            </div>
            <div className="navBtns">
              <form action="#">
                <input type="text" placeholder="What are you looking for?" />
                <button>
                  <i className="fas fa-search"></i>
                </button>
              </form>
              <button>
                <i className="fa-regular fa-heart"></i>
              </button>
              <button>
                <i className="fa fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
