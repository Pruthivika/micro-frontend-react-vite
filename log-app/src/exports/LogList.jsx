import React, { useEffect, useState } from "react";
import { Box, Text, VStack, Table, IconButton, Flex } from "@chakra-ui/react";
import { useSelector, useDispatch } from 'react-redux';
import { LuTable2, LuList } from "react-icons/lu"

const LogList = () => {
    const [isTableView, setIsTableView] = useState(true);
    const dispatch = useDispatch();
    const { logs } = useSelector((state) => state.activity);
    if (!logs) {
        return (
            <Box textAlign="center" py={10}>
                <Spinner size="xl" />
                <Text fontSize="lg" mt={4} color="gray.500">Loading data...</Text>
            </Box>
        );
    }

    useEffect(() => {
        dispatch({ type: "activity/fetchLogs" });
    }, [dispatch]);

    return (
        <Box width={'100%'} p={5} mt={5} borderRadius="md" boxShadow="sm" bg="#f8f8f8" color="#242424">
            <Flex align="center" justifyContent={'space-between'}>
                <Text fontSize="lg" fontWeight="bold" mb={4} textAlign={'left'}>
                    Activity Log
                </Text>


                <IconButton aria-label="Switch"
                    backgroundColor={'white'}
                    mb={4}
                    onClick={() => setIsTableView(!isTableView)}
                >
                    {isTableView ? <LuList /> : <LuTable2 />}
                </IconButton>
            </Flex>


            {isTableView ? (
                <Table.Root variant="simple" size="sm" stickyHeader>
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeader>User</Table.ColumnHeader>
                            <Table.ColumnHeader>Activity</Table.ColumnHeader>
                            <Table.ColumnHeader>Time</Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {logs.map((log, index) => (
                            <Table.Row key={index}>
                                <Table.Cell fontWeight="bold">{log.user}</Table.Cell>
                                <Table.Cell>{log.message}{' '}{log.actionUser !== '' && log.actionUser}</Table.Cell>
                                <Table.Cell color="gray.500">{log.time}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>
            ) : (
                <VStack align="start" spacing={3}>
                    {logs.map((log, index) => (
                        <Box key={index} flex={1}>
                            <Text>
                                <Text as="span" fontWeight="bold">{log.user}</Text> {log.message} {log.actionUser !== '' && <Text as={"span"} fontWeight={'light'} fontStyle={'italic'}>{log.actionUser}</Text>}
                            </Text>
                            <Text fontSize="sm" textAlign={'left'} color="gray.500">{log.time}</Text>
                        </Box>
                    )
                    )}
                </VStack>
            )
            }
        </Box>
    );
};

export default LogList;
