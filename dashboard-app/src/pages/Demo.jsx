import CardWidget from "@/exports/CardWidget"
import React from "react"
import { Grid, GridItem } from "@chakra-ui/react"

const DemoPage = () => {
    return (
        <Grid
            h="200px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
        >
            <GridItem rowSpan={2} colSpan={1}>
                <CardWidget />
            </GridItem>
            <GridItem colSpan={2}>
                colSpan=2
            </GridItem>
            <GridItem colSpan={2}>
                colSpan=2
            </GridItem>
            <GridItem colSpan={4}>
                colSpan=4
            </GridItem>
        </Grid>
    )
}

export default DemoPage