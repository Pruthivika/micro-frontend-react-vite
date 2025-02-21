import { NavLink, Outlet } from "react-router-dom";
import { Box, Flex, Stack } from "@chakra-ui/react";

const Layout = () => {
    return (
        <Flex h="80vh">
            <Box borderTopLeftRadius={20} borderBottomLeftRadius={20} w="250px" bg="#726392" color="white" p="4">
                <Box fontSize="xl" mb="4">Micro Frontend App</Box>
                <Stack spacing="4">
                    <NavLink to="/dashboard" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal", borderBottom: "1px solid", paddingBottom: "8px" })}>
                        Dashboard
                    </NavLink>
                    <NavLink to="/log" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal", borderBottom: "1px solid", paddingBottom: "8px" })}>
                        Data Lab
                    </NavLink>
                    <NavLink to="/default" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal", borderBottom: "1px solid", paddingBottom: "8px" })}>
                        Surveys
                    </NavLink>
                    <NavLink to="/default" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal", borderBottom: "1px solid", paddingBottom: "8px" })}>
                        Library
                    </NavLink>
                    <NavLink to="/default" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal", borderBottom: "1px solid", paddingBottom: "8px" })}>
                        Marketplace
                    </NavLink>
                </Stack>
            </Box>

            {/* Content Area */}
            <Box borderTopRightRadius={10} borderBottomRightRadius={10} flex="1" p="4" bg="gray.100">
                <Outlet /> {/* This will render the routed content */}
            </Box>
        </Flex>
    );
};

export default Layout;
