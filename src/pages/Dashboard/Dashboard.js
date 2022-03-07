import React from 'react'
import AccountRevenue from '../../components/DashboardComponent/AccountRevenue'
import BarChart from '../../components/DashboardComponent/BarChart'
import DashboardCard from '../../components/DashboardComponent/DashboardCard'
import PieCharts from '../../components/DashboardComponent/PieCharts'
import TransactionCount from '../../components/DashboardComponent/TransactionCount'
import Layout from '../../components/Layout/Layout'

const Dashboard = () => {
  return (
    <Layout title="Overview">
        <TransactionCount />
        <AccountRevenue />
        <BarChart />
        <DashboardCard />
        <PieCharts />
    </Layout>
  )
}

export default Dashboard