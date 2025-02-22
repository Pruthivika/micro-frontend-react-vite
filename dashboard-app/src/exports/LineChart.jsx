import React, { useEffect } from 'react';
import Highcharts, { chart } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Box, Heading, Text, Flex, Stat } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';

const LineChart = () => {

  const dispatch = useDispatch();
  const metrics = useSelector((state) => state.activity);
  if (!metrics) {
    return (
      <Box textAlign="center" py={10}>
        <Spinner size="xl" />
        <Text fontSize="lg" mt={4} color="gray.500">Loading data...</Text>
      </Box>
    );
  }

  const { lineChartData } = metrics;

  const options = {
    chart: {
      height: "90%"
    },
    title: {
      text: ''
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: ''
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      },
    },
    legend: {
      enabled: false
    },
    series: [{
      data: lineChartData,
      color: '#7cb5ec',
      tooltip: {
        valueSuffix: ' users'
      }
    }]
  };


  useEffect(() => {
    dispatch({ type: "activity/fetchStats" });
  }, [dispatch]);

  return (

    <Box backgroundColor={'white'} color={'#242424'} p="20px" width="400px">
      <Heading as="h2" size="lg" mr="4" mb="5" textAlign={'left'} ml="4">User Activity</Heading>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </Box>

  );
};

export default LineChart;
