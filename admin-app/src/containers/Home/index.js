import React from 'react'
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
import Layout from '../../components/Layout';
import './style.css';
import {NavLink} from 'react-router-dom';
/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
      <Layout>
          <Container fluid>
          <Row>
              <Col md={2} className="sidebar">
                  <ul>
                      <li><NavLink to={`/`}>Home</NavLink></li>
                      <li><NavLink to={`/products`}>Products</NavLink></li>
                      <li><NavLink to={`/orders`}>Orders</NavLink></li>
                  </ul>
                  
            </Col>
              <Col md={10} style={{marginLeft:'auto'}}>container</Col>

          </Row>

          </Container>
         



          {/* <Jumbotron style={{margin:'5rem',background:'#fff'}}className="text-center">
              <h1>Welcome to Admin Dashboard</h1>
              <p>short for administration: the activities involved in managing or organizing a business or other organization: I don't want my best salespeople spending all their time doing admin. an admin error. an admin fee/charge. an admin job</p>
          </Jumbotron> */}
      </Layout>
   )

 }

export default Home