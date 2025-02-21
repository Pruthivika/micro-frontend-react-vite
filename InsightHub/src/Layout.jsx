import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

const Layout = ({ children }) => {
    return (
        <Box>
            <Flex as="nav" p="4" bg="blue.500" color="white" justify="space-between">
                <Box fontSize="xl">Micro Frontend App</Box>
                <Flex gap="4">
                    <Button as={Link} to="/dashboard" colorScheme="teal">
                        Dashboard
                    </Button>
                    <Button as={Link} to="/log" colorScheme="teal">
                        Log
                    </Button>
                </Flex>
            </Flex>
            <Box p="4">{children}</Box>
        </Box>
    );
};

export default Layout;
