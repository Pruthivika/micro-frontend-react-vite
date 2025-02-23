import { NavLink, Outlet } from "react-router-dom";
import { Box, Flex, Stack, Image } from "@chakra-ui/react";
import LogoImage from "./assets/logo.png";

const Layout = () => {
    return (
        <Flex h="90vh">
            {/* Sidebar navigation */}
            <Box w="250px" bg="#726392" color="white" p="4">
                <Image src={LogoImage} alt="Logo" marginBottom={10} />
                <Stack spacing="4" color={'white'}>
                    <NavLink to="/" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal", borderBottom: "1px solid", paddingBottom: "8px" })}>
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

            {/* Main content area */}
            <Box borderTopRightRadius={10} borderBottomRightRadius={10} flex="1" p="4" bg="gray.100">
                {/* This is where the routed component will be rendered */}
                <Outlet />
            </Box>
        </Flex>
    );
};

export default Layout;
