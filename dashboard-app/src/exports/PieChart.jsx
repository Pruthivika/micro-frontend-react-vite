import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';

const PieChart = () => {

    const dispatch = useDispatch();
    const metrics = useSelector((state) => state.activity);

    // Display a loading spinner if metrics data is not available yet
    if (!metrics) {
        return (
            <Box textAlign="center" py={10}>
                <Spinner size="xl" />
                <Text fontSize="lg" mt={4} color="gray.500">Loading data...</Text>
            </Box>
        );
    }

    const { dailyActiveUsers, pieChartData, authenticationData } = metrics;
    // Creating a copy of pieChartData to avoid mutating Redux state
    const pieData = pieChartData.map(item => ({ ...item }))

    const options = {
        chart: {
            type: "pie",
            height: "60%"
        },
        title: {
            text: "",
        },
        legend: {
            layout: "vertical",
            align: "right",
            verticalAlign: "middle",
            labelFormatter: function () {
                return `${this.name}: ${this.y}`;
            },
        },
        series: [
            {
                name: "Users",
                data: pieData,
            },
        ],
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: false,
                    format: "<b>{point.name}</b>: {point.y}",
                },
                showInLegend: true,
            },
        },
    };


    useEffect(() => {
        dispatch({ type: "activity/fetchStats" });
    }, [dispatch]);


    return (
        <Box backgroundColor={'white'} color={'#242424'} p="20px" width="400px">
            <Box marginBottom={5}>
                <Flex align="center" justifyContent={'space-between'}>
                    <Heading as="h2" size="lg" mr="4">Daily active users</Heading>
                    <Text fontSize="2xl">{dailyActiveUsers}</Text>
                </Flex>
            </Box>
            <HighchartsReact highcharts={Highcharts} options={options} />
            <Heading as="h2" size="sm" mt="4" mb="4">By Authentication Method</Heading>
            <Flex justify="space-between" mt="2">
                {authenticationData.map((item) => (
                    <Text key={item.name}>
                        {item.name}
                        <Box as="span" display="block" fontWeight="bold" mt="1">
                            {item.y}
                        </Box>
                    </Text>
                ))}
            </Flex>
        </Box>
    );
};

export default PieChart;
