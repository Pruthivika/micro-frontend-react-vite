import React from "react";
import { Box, Text, Image, VStack } from "@chakra-ui/react";
import underConstructionImage from "../assets/undraw_under-construction.svg";

const DefaultPage = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" marginTop={'10%'}>
            <VStack spacing={4}>
                <Image src={underConstructionImage} alt="Under Construction" boxSize="300px" />
                <Text fontSize="xl" fontWeight="bold" color="gray.600">
                    This page is under construction
                </Text>
            </VStack>
        </Box>
    );
}

export default DefaultPage;