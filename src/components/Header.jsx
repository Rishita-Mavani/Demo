import React from 'react';
import { addIcon } from '../assets/images';
// import styled from '@emotion/styled';
function Header(){
    return(
        <>
            { <img src={addIcon} className='headerimg' alt="" /> }
        </>
    );
}
export default Header;