import React, { useEffect } from "react";
import { Box, Text, SimpleGrid, Card, Spinner } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';

const CardWidget = () => {
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

    const { dailyActiveUsers, monthlyActiveUsers, dailyTimePerUser, date } = metrics;


    useEffect(() => {
        dispatch({ type: "activity/fetchStats" });
    }, [dispatch]);

    return (
        <Card.Root
            size={'lg'}
            p={4}
            borderRadius="lg"
            bg="#f8f8f8"
            color="#242424"
            border={'none'}
            boxShadow="0px 4px 20px  rgba(20, 20, 20, 0.19)"
            _hover={{
                boxShadow: "0px 8px 30px rgba(31, 31, 31, 0.19)",
                transition: "all 0.2s ease-in-out",
            }}
        >
            <Card.Body>
                <SimpleGrid columns={3} spacing={4} textAlign="center">
                    <Box>
                        <Text fontSize="sm" fontWeight="bold">Daily Active Users</Text>
                        <Text fontSize="2xl" fontWeight="bold">{dailyActiveUsers}</Text>
                        <Text fontSize="sm" color="gray.500">{date}</Text>
                    </Box>
                    <Box>
                        <Text fontSize="sm" fontWeight="bold">Monthly Active Users</Text>
                        <Text fontSize="2xl" fontWeight="bold">{monthlyActiveUsers}</Text>
                        <Text fontSize="sm" color="gray.500">{date}</Text>
                    </Box>
                    <Box>
                        <Text fontSize="sm" fontWeight="bold">Daily Time Per Active User</Text>
                        <Text fontSize="2xl" fontWeight="bold">{dailyTimePerUser} mins</Text>
                        <Text fontSize="sm" color="gray.500">{date}</Text>
                    </Box>
                </SimpleGrid>
            </Card.Body>
        </Card.Root>
    )
}

export default CardWidget;