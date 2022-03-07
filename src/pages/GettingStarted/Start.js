import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ExploreCards from '../../components/GettingStarted/ExploreCards'
import QuickLinks from '../../components/GettingStarted/QuickLinks'
import Layout from '../../components/Layout/Layout'

const Start = () => {
  return (
    <Layout title="Get Started">
        <Container>
        <div className="text-center mt-40">
            <h4 className="fs-20 text-darker fw-700 font-default">Welcome to WayaPOS merchant dashboard</h4>
            <h4 className="fs-14 text-darker font-default mt-20">Follow the steps below to get started.</h4>
        </div>

        <QuickLinks />
        <ExploreCards />
        </Container>
    </Layout>
  )
}

export default Start