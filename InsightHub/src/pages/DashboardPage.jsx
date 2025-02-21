import React from 'react'
import LineChart from 'dashboardApp/LineChart'
import CardWidget from 'dashboardApp/CardWidget'

const DashboardPage = () => {
    return (
        <>
            <h1>InsightHub</h1>
            <LineChart />
            <CardWidget />

        </>
    )
}

export default DashboardPage;