import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { addIcon } from "../assets/images";
import { Button, TextField, styled } from "@mui/material";

function Login() {
    const CssTextField = styled(TextField)({

        '& .MuiInputBase-root': {
            color: 'red',
        },
        '& label.Mui-focused': {
            color: '#A0AAB4',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#B2BAC2',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#E0E3E7',
            },
            '&:hover fieldset': {
                borderColor: '#B2BAC2',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#6F7E8C',
            },
        },
    });
    return (
        <>
            <Header />
            <h1>Login Component</h1><br />

            <Link to="/Register">Register</Link><br />
            <Link to="product-list">Login</Link>
            <br />
            {/* <img src={addIcon} alt="" /> */}
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>

            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="standard-basic" label="Standard" variant="standard" />
            <CssTextField label="Custom CSS" id="custom-css-outlined-input" />
            <Footer />
        </>
    );
}

export default Login;