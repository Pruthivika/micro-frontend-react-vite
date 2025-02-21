import React, { useEffect } from "react";
import { Card, Heading } from "@chakra-ui/react"
// import { useDispatch, useSelector } from "react-redux";

const CardWidget = () => {
    // const dispatch = useDispatch();
    // const activeUsers = useSelector((state) => state.activity.activeUsers);


    // useEffect(() => {
    //     dispatch({ type: "activity/fetchActiveUsers" });
    // }, [dispatch]);

    return (
        <Card.Root size="lg">
            <Card.Header>
                <Heading size="md"> Card widget</Heading>
            </Card.Header>
            <Card.Body color="fg.muted">
                {/* <ul>
                    {activeUsers.map((user, index) => (
                        <li key={index}>
                            {user.date} - {user.count} Users
                        </li>
                    ))}
                </ul> */}
            </Card.Body>
        </Card.Root>
    )
}

export default CardWidget;