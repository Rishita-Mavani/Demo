import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import { Button, TextField, styled } from "@mui/material";

function Login() {
    return (
        <>
        <Header />
        <Searchbar />
        <Button variant="contained">Log In</Button>&nbsp;&nbsp;
        <Button variant="outlined">Cancel</Button><br />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <h1>Login or Create an account</h1><br />

            <Link to="/Register">Register</Link><br />
            <Link to="product-list">Login</Link>
        <Footer />
        </>
    );
}

export default Login;