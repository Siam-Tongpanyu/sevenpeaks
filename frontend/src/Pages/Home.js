import React from 'react';
import {Layout} from '../Layouts';
import GuardianList from '../Components/Guardian/GuardianList';
import GuardianOrder from '../Components/Guardian/GuardianOrder';
import GuardianPagination from '../Components/Guardian/GuardianPagination';
import './home.css';



const Home = (props)=>{
return (
  <Layout>
    <GuardianOrder />
    <GuardianPagination />
    <GuardianList />
    <GuardianPagination />
  </Layout>
);
};

export default Home;