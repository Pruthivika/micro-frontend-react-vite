import { Stack } from "@chakra-ui/react";
import React from "react";
import CardWidget from 'dashboardApp/CardWidget'
import LogList from 'logApp/LogList'

const LogPage = () => {
    return (


        <Stack gap={4}>
            <CardWidget />
            <LogList />
        </Stack>

    );
}

export default LogPage;