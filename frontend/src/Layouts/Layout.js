import React from 'react';
import { Container } from '@material-ui/core';

const Layout = (props) => ( 
 <Container maxWidth="md">
    {props.children}
 </Container>
);

 export default Layout
 