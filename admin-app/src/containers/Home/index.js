import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Layout from '../../components/Layout'

/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
      <Layout>
          <Jumbotron style={{margin:'5rem',background:'#fff'}}className="text-center">
              <h1>Welcome to Admin Dashboard</h1>
              <p>short for administration: the activities involved in managing or organizing a business or other organization: I don't want my best salespeople spending all their time doing admin. an admin error. an admin fee/charge. an admin job</p>
          </Jumbotron>
      </Layout>
   )

 }

export default Home