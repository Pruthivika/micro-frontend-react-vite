import React from 'react'
import LineChart from 'dashboardApp/LineChart'
import CardWidget from 'dashboardApp/CardWidget'
import PieChart from 'dashboardApp/PieChart'
import { Grid, GridItem } from "@chakra-ui/react"

const DashboardPage = () => {
    return (
        <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={4} p={4}>
            <GridItem colSpan={2}>
                <CardWidget />
            </GridItem>
            <GridItem >
                <PieChart />
            </GridItem>
            <GridItem>
                <LineChart />
            </GridItem>
        </Grid>
    )
}

export default DashboardPage;