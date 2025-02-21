import React from "react";
import { Card, Heading } from "@chakra-ui/react"

const CardWidget = () => {
    return (
        <Card.Root size="lg">
            <Card.Header>
                <Heading size="md"> Card - lg</Heading>
            </Card.Header>
            <Card.Body color="fg.muted">
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
            </Card.Body>
        </Card.Root>
    )
}

export default CardWidget;