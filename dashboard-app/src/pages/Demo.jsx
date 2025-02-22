import CardWidget from "@/exports/CardWidget"
import React from "react"
import { Grid, GridItem } from "@chakra-ui/react"
import LineChart from "@/exports/LineChart"
import PieChart from "@/exports/PieChart"

const DemoPage = () => {
    return (
        <Grid
            h="200px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
            marginTop={3}
        >
            <GridItem rowSpan={2} colSpan={1}>

            </GridItem>
            <GridItem colSpan={4}>
                <CardWidget />
            </GridItem>
            <GridItem colSpan={2}>
                <PieChart />
            </GridItem>
            <GridItem colSpan={2}>
                <LineChart />
            </GridItem>
        </Grid>
    )
}

export default DemoPage